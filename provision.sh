#!/usr/bin/env bash

# echo colors
CYAN='\033[0;36m'

echo -e "${CYAN} ===> Setting Timezone & Locale to $3 & en_US.UTF-8"

sudo ln -sf /usr/share/zoneinfo/$3 /etc/localtime
sudo apt-get install -qq language-pack-en
sudo locale-gen en_US
sudo update-locale LANG=en_US.UTF-8 LC_CTYPE=en_US.UTF-8

echo -e "${CYAN} ===> Repair tty log message"
sudo sed -i "/tty/!s/mesg n/tty -s \\&\\& mesg n/" /root/.profile

# in order to avoid the message
# ===> default: dpkg-preconfigure: unable to re-open stdin: No such file or directory
# use "> /dev/null 2>&1 inorder to redirect stdout to /dev/null"
# for more info see http://stackoverflow.com/questions/10508843/what-is-dev-null-21

echo -e "${CYAN} ===>  Installing Node and NPM"
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y npm

echo -e "${CYAN} ====> Installing yarn"
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
echo export PATH="$PATH:`yarn global bin`" >> ~/.bashrc

sudo npm install --global gatsby-cli
