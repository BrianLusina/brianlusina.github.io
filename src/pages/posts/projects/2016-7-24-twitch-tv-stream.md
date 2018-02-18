---
layout: projects
title: "TwitchTv Stream"
categories: projects
excerpt: "Simple website that retrieves data from TwitchTv Stream JSON API"
ads: true
share: false
image:
  feature: twitchtv-stream.png
  teaser: twitchtv-stream.png
  credit: Brian Lusina
  creditlink: http://twitchstreamers.bitballoon.com/
---

This is a simple one pager site that uses and utilizes the TwitchTv JSON API to display various channels of users from the TwitchTv site. It fulfills the following user stories:

+ A user can click the status output and be sent directly to the intended Twitch.tv channel.
+ if a Twitch user is currently streaming, a user can see additional details about what they are streaming.
+ A user will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). This is verified by adding brunofin and comster404 to the array of Twitch streamers.

An example call to Twitch.tv's JSONP API [here](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Front-End-Project-Use-Twitchtv-JSON-API)

The relevant documentation about this API call is here

Here's an array of the Twitch.tv usernames of people who regularly stream: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

