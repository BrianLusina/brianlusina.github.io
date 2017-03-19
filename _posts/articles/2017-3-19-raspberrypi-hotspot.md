---
layout: article
categories: articles
title: Raspberry Pi Hotsport configuration
excerpt: A small demo of configuring a hotspot for your Raspberry Pi 
author: brian_lusina
share: true
image:
 feature: raspberrypi.png
 teaser: raspberrypi.png
 thumb: raspberrypi.png
---

Configuring a Raspberry Pi is fun especially when you delve into IoT and start tinkering around with making machines talk to each other. This tool is perfect for such fun. It is even better when you can get it connected to the internet and perform even more functions such as make your coffee before you wake up or turn off your lights from wherever you are.

Most of these functions may require an internet connection and this means that your Pi(I will start calling it Pi for short from now on, not to be confused with the Math constant), may have to be able to generate its own hotspot. This is limiting considering Pis do not essentially come with their own **WiFi dongles** and you will be required to buy your own or always have the Pi set up where there will always be an internet connection.

For today, we shall configure a Pi to generate its own hotspot when it can not find any known hotspots in its vicinity and also have the added benefit of connecting to a hotspot when there is a known network.

### Aim

Raspberry Pi searches for known router's (SSID)

If the router is not found then it creates a hotspot so tablets, phones and computers can connect to the Raspberry Pi's WiFi hotspot, which is not routed to the internet but allows a connection via SSH, VNC etc.

### Requirements

For this, all you will need:

+ Raspberry Pi 3 or other Raspberry Pi set up with a WiFi dongle
+ Internet connection
+ WiFi connection set up on your router


### Step 1

This step will mostly be for settin up tools we need for the Pi. To start off hostapd hotspot client and dnsmasq lightweight dns server need to be installed.

Open a Terminal session in your Pi and update Raspbian with the latest updates by entering the commands:

``` sh
$ sudo apt-get update
$ sudo apt-get upgrade
```
This will update the packages on the Rasberry Pi

Now, install hostapd. Enter the command:

``` sh
$ sudo apt-get install hostapd
```
enter Y when prompted.

Install dnsmasq with the command:

``` sh
sudo apt-get install dnsmasq
```
enter Y when prompted

The installers will have set up the programme so they run when the pi is started. For this setup they only need to be started if the home router is not found. So automatic startup needs to be disabled. This is done with the following commands:

``` sh
sudo systemctl disable hostapd

sudo systemctl disable dnsmasq
```

Now the hostspot configuration file can be setup. This contains the name of the WiFi signal you will need to connect to (SSID) and the security password.

#### Hostapd Configuration

Using a text editor edit the hostapd configuration file. This file won't exist at this stage so it will be blank.

``` sh
sudo nano /etc/hostapd/hostapd.conf
```
This will create the hostapd.conf

enter or paste the settings:

``` plain
interface=wlan0
driver=nl80211
ssid=RPI3WiFi
hw_mode=g
channel=6
wmm_enabled=0
macaddr_acl=0
auth_algs=1
ignore_broadcast_ssid=0
wpa=2
wpa_passphrase=1234567890
wpa_key_mgmt=WPA-PSK
wpa_pairwise=TKIP
rsn_pairwise=CCMP
```

A brief breakdown of what the above means:

+ interface will be wlan0
+ driver nl80211 works with the Raspberry Pi 3 onboard WiFi but you will need to check that your wifi dongle is compatable and can use AP mode.

For more information on wifi dongles check [here](elinux.org/RPi_USB_Wi-Fi_Adapters)

+ The SSID is the name of the WiFi signal broadcast from the RPi, which you will connect to with your Tablet or phones WiFi settings.

+ channel can be set between 1 and 13. If you are having trouble connection because of to many wifi signals in your area are using channel 6 then try another channel.

+ wpa_passphrase is the password you will need to enter when you first connect a device to your Raspberry Pi's hotspot. This should be at least 8 characters and a bit more difficult to guess than my example.

To save the config file press ctrl & o and to exit nano press Ctrl & x

Now the default file for hostapd needs to be updated to point to where the config file is stored.

In terminal enter the command

``` sh
sudo nano /etc/default/hostapd
```

Change:
``` plain
#demon_conf=""
```

to

``` plain
demon_conf="/etc/hostapd/hostapd.conf"
```

And save.


#### dnsmasq configuration

Next dnsmasq need to be configured to allow the PI to act as a router and issue IP addresses.

``` sh
$ sudo nano /etc/dnsmasq.conf
```

Go to the bottom of the file and add the following lines

``` plain
#Pi3Hotspot Config
#stop DNSmasq from using resolv.conf
no-resolv
#Interface to use
interface=wlan0
bind-interfaces
dhcp-range=192.168.40.5,192.168.40.100,255.255.255.0,12h
```

And then save (ctrl & o) and exit (ctrl & x)

### Step 2

Now that **hostapd** and **dnsmasq** are configured we now need to make some changes to the interfaces file and then add a script that will detect if you are at home or not.

Next we need to edit the interfaces file. There will be several entries already in the file. Look for references to *wlan0* and alter them as below. Any reference to *wpa_conf* for wlan0 should be disabled by putting a # at the start of the line.

Open the interfaces file with the command

``` sh
$ sudo nano /etc/network/interfaces
```

edit the following lines as below

``` plain
auto lo wlan0
iface lo inet loopback

allow-hotplug wlan0
iface wlan0 inet manual
# wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
```

now save (ctrl & o) and exit (ctrl & x)

Note: Due to the constants updates to Linux the Wifi login details have moved, if your home routers SSID and password was listed in this file then the hotspot will probably not get generated.

You will need to put a # infront of each line

``` plain
#iface wlan0 inet dhcp
#       wpa-ssid "mySSID"
#       wpa-psk "Router Pasword"
```

These details need to be in the **wpa_supplicant.conf** file to work with this setup.

Add your router details to the wpa_supplicant.conf file with 

``` sh
$ sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
```

and add the following commands to the bottom of the file.

``` plain
network={
        ssid="mySSID"
        psk="Router Password"
        key_mgmt=WPA-PSK
}
```

### Step 3

This is the final setup where we write the script that will start up when the RPi is first started. We will need to add the startup script to the `rc.local` file.

This is an altered version of the "Rpi Network conf Bootstrapper" script by Lasse Christiansen

This script will check what routers are available when the RPi is started in the order of `mySSID1`, `mySSID2` etc. 
The first router found in the list will be connected to using existing configured WiFi settings. If none of the listed SSIDs are in range then a WiFi hotspot is created.

``` sh
$ sudo nano /etc/rc.local
```

Your rc.local file will look like this if it has not previously been edited.

``` sh
#!/bin/sh
# rc.local
# This script is executed at the end of each multiuser runlevel.
# Make sure that the script will "exit 0" on success or any other
# value on error.
# In order to enable or disable this script just change the execution
# bits.
# By default this script does nothing.
# Print the IP address
_IP=$(hostname -I) || true
if [ "$_IP" ]; then
printf "My IP address is %s\n" "$_IP"
Fi
exit 0
```

First of all change the top line from `#!/bin/sh` to `#!/bin/bash`

The line "exit 0" need to be at the bottom of the file so add the bootstrapper script between

``` plain
printf "My IP address is %s\n" "$_IP"
Fi
```

and

``` plain
exit 0
```

The script to add is this:

``` sh

#Wifi config - if no prefered Wifi generate a hotspot
#RPi Network Conf Bootstrapper
 
createAdHocNetwork()
{
    echo "Creating RPI Hotspot network"
    ifconfig wlan0 down
    ifconfig wlan0 10.0.0.5 netmask 255.255.255.0 up
    service dnsmasq start
    service hostapd start
    echo " "
    echo "Hotspot network created"
    echo " "
}
 
echo "================================="
echo "RPi Network Conf Bootstrapper"
echo "================================="
echo "Scanning for known WiFi networks"
ssids=(mySSID1 mySSID2)
connected=false
for ssid in "${ssids[@]}"
do
    echo " "
    echo "checking if ssid available:" $ssid
   echo " "
    if iwlist wlan0 scan | grep $ssid > /dev/null
    then
        echo "First WiFi in range has SSID:" $ssid
        echo "Starting supplicant for WPA/WPA2"
        wpa_supplicant -B -i wlan0 -c /etc/wpa_supplicant/wpa_supplicant.conf > /dev/null 2>&1
        echo "Obtaining IP from DHCP"
        if dhclient -1 wlan0
        then
            echo "Connected to WiFi"
            connected=true
            break
        else
            echo "DHCP server did not respond with an IP lease (DHCPOFFER)"
            wpa_cli terminate
            break
        fi
    else
        echo "Not in range, WiFi with SSID:" $ssid
    fi
done
 
if ! $connected; then
    createAdHocNetwork
fi 
```
bootstrapper script to start up RPi hotspot on boot

And finally save (ctrl & o) and exit (ctrl & x)

In the line ssids=(mySSID1 mySSID2) change mySSID1 to the SSID name of your home router,

if you connect your Rpi to other routers then these can be added separated by a space.
Remove mySSID2 if you only want to search for one router as this will speed up the startup process.

You should now be able to reboot and if all has gone ok your Raspberry Pi will start and connect to your router as normal.

The final `rc.local` file should look like this

``` sh
#!/bin/bash
# rc.local
# This script is executed at the end of each multiuser runlevel.
# Make sure that the script will "exit 0" on success or any other
# value on error.
# In order to enable or disable this script just change the execution
# bits.
# By default this script does nothing.
# Print the IP address
_IP=$(hostname -I) || true
if [ "$_IP" ]; then
printf "My IP address is %s\n" "$_IP"
Fi

#Wifi config - if no prefered Wifi generate a hotspot
#RPi Network Conf Bootstrapper
 
createAdHocNetwork()
{
    echo "Creating RPI Hotspot network"
    ifconfig wlan0 down
    ifconfig wlan0 10.0.0.5 netmask 255.255.255.0 up
    service dnsmasq start
    service hostapd start
    echo " "
    echo "Hotspot network created"
    echo " "
}
 
echo "================================="
echo "RPi Network Conf Bootstrapper"
echo "================================="
echo "Scanning for known WiFi networks"
ssids=(mySSID1 mySSID2)
connected=false
for ssid in "${ssids[@]}"
do
    echo " "
    echo "checking if ssid available:" $ssid
   echo " "
    if iwlist wlan0 scan | grep $ssid > /dev/null
    then
        echo "First WiFi in range has SSID:" $ssid
        echo "Starting supplicant for WPA/WPA2"
        wpa_supplicant -B -i wlan0 -c /etc/wpa_supplicant/wpa_supplicant.conf > /dev/null 2>&1
        echo "Obtaining IP from DHCP"
        if dhclient -1 wlan0
        then
            echo "Connected to WiFi"
            connected=true
            break
        else
            echo "DHCP server did not respond with an IP lease (DHCPOFFER)"
            wpa_cli terminate
            break
        fi
    else
        echo "Not in range, WiFi with SSID:" $ssid
    fi
done
 
if ! $connected; then
    createAdHocNetwork
fi 

exit 0

```
final rc.local file


### Conclusion

If all has gone well you should still be able to connect the Pi to your home router when it boots up. In case you want to check whether the setup works if there is not hotspot around. You can switch off your router and reboot your Raspberry Pi and watch at startup as the above `rc.local` script runs as it searches for a hotspot and since there will not be one it will generate its own hotspot and you should be able to connect to it with either your mobile, laptop, tablet etc.

Furthermore, you can open an ssh connection to the Pi using this command

``` sh
$ ssh pi@192.168.40.5
```
This will prompt you for a password. This password will be for the Raspberry Pi

That is about it! You should now have a hotspot on your Raspberry Pi. Although it is important to note that this hotspot connection will not have any internet connection and thus you can't connect to the web with it, however any other device can connect to it via an ssh connection.

