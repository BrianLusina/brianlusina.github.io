#!/bin/sh

openssl aes-256-cbc -d -K $REPO_ENC_KEY -iv $REPO_ENC_IV -in git_deploy_key.enc -out /tmp/git_deploy_key
chmod 600 /tmp/git_deploy_key
echo 'echo ${SSH_PASSPHRASE}' > /tmp/askpass && chmod +x /tmp/askpass
eval "$(ssh-agent -s)"
DISPLAY=":0.0" SSH_ASKPASS="/tmp/askpass" setsid ssh-add /tmp/git_deploy_key </dev/null