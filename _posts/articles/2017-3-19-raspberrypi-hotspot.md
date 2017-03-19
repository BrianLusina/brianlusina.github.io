---
layout: article
categories: articles
title: Raspberry Pi Hotsport configuration
excerpt: A small demo of configuring a hotspot for your Raspberry Pi 
author: brian_lusina
share: true
image:
 feature: binary_tree.png
 teaser: binary_tree.png
 thumb: binary_tree.png
 creditlink: https://www.quora.com/What-are-binary-trees-and-how-can-I-practice-implementing-them-in-Python
 credit: Quora
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
> This will update the packages on the Rasberry Pi

Now, install hostapd. Enter the command:

``` sh
$ sudo apt-get install hostapd
```
> enter Y when prompted.

Install dnsmasq with the command:

``` sh
sudo apt-get install dnsmasq
```
> enter Y when prompted

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
> This will create the hostapd.conf

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

Now the defaults file needs to be updated to point to where the config file is stored.
In terminal enter the command
sudo nano /etc/default/hostapd

Change:
#demon_conf=""
to
demon_conf="/etc/hostapd/hostapd.conf"

And save.
