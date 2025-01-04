"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/monsterpi-documentation","metadata":{"permalink":"/blog/monsterpi-documentation","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2025/01-02 MonsterPi Documentation/index.mdx","source":"@site/blog/2025/01-02 MonsterPi Documentation/index.mdx","title":"MonsterPi Documentation","description":"Rewritten the MonsterPi documentation","date":"2025-01-02T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":0.58,"hasTruncateMarker":true,"authors":[{"name":"Maurice Kevenaar","title":"Independent advisor and friend of the project / Community manager","url":"https://kevenaar.name","page":{"permalink":"/blog/authors/mkevenaar"},"socials":{"bluesky":"https://bsky.app/profile/kevenaar.name","mastodon":"https://masto.nu/@mkevenaar","github":"https://github.com/mkevenaar","linkedin":"https://www.linkedin.com/in/mauricekevenaar/","x":"https://x.com/mkevenaar","newsletter":"https://kevenaar.name"},"imageURL":"https://github.com/mkevenaar.png","key":"mkevenaar"}],"frontMatter":{"title":"MonsterPi Documentation","authors":["mkevenaar"],"tags":["devblog"],"slug":"/monsterpi-documentation","description":"Rewritten the MonsterPi documentation"},"unlisted":false,"lastUpdatedAt":1735841173000,"lastUpdatedBy":"Maurice Kevenaar","nextItem":{"title":"Documentation site revamp","permalink":"/blog/documentation-site-revamp"}},"content":"## \ud83d\udcd6 Documentation changes\\n\\nWe have completely rewritten the FDM Monster [MonsterPi](/docs/installing/monsterpi) documentation.\\n\\n\x3c!-- truncate --\x3e\\n\\nThe main changes are:\\n\\n- The Raspberry Pi Imager documentation has completely rewritten.\\n  - This includes a total of 13 screenshots.\\n- A table with suggested items has been added for your MonsterPi device.\\n- The Windows and Linux installations that have been deprecated for a while has been moved to the deprecated folder.\\n- Some sections have been reworded\\n- Documentation for upgrading MonsterPi images before 0.4.x has been removed. Upgrading to 0.4.x is advised.\\n- A [Chat on Discord](https://discord.gg/mwA8uP8CMc) link has been added to the homepage\\n- Soon the FDM Monster website will be redirected to the documentation."},{"id":"/documentation-site-revamp","metadata":{"permalink":"/blog/documentation-site-revamp","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2024/11-03 Documentation site revamp/index.mdx","source":"@site/blog/2024/11-03 Documentation site revamp/index.mdx","title":"Documentation site revamp","description":"Just a quick update","date":"2024-11-03T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":0.625,"hasTruncateMarker":true,"authors":[{"name":"Maurice Kevenaar","title":"Independent advisor and friend of the project / Community manager","url":"https://kevenaar.name","page":{"permalink":"/blog/authors/mkevenaar"},"socials":{"bluesky":"https://bsky.app/profile/kevenaar.name","mastodon":"https://masto.nu/@mkevenaar","github":"https://github.com/mkevenaar","linkedin":"https://www.linkedin.com/in/mauricekevenaar/","x":"https://x.com/mkevenaar","newsletter":"https://kevenaar.name"},"imageURL":"https://github.com/mkevenaar.png","key":"mkevenaar"}],"frontMatter":{"title":"Documentation site revamp","authors":["mkevenaar"],"tags":["devblog"],"slug":"/documentation-site-revamp","description":"Just a quick update"},"unlisted":false,"lastUpdatedAt":1735841436000,"lastUpdatedBy":"Maurice Kevenaar","prevItem":{"title":"MonsterPi Documentation","permalink":"/blog/monsterpi-documentation"},"nextItem":{"title":"Klipper update","permalink":"/blog/klipper-update"}},"content":"The documentation website has been updated!\\n\\n## \ud83d\udcd6 Documentation changes\\n\\nThere are not much changes on the documentation itself, however some of the pages have been moved.\\n\\n\x3c!-- truncate --\x3e\\n\\nThe main changes are:\\n\\n- Developer documentation has been split off of the end-user documentation\\n  - Having the [developer documentation](/docs/developer_setup/introduction) part of the end-user documentation never made sense to me. So I have moved it to it\'s own section on the top of the page.\\n  - The URLs stayed the same, so any bookmarks should still work\\n- Community section added\\n  - The [Our Team](/docs/community/ourteam) page has been moved to the Community section\\n  - A new page with [external links](/docs/community/links) has been added.\\n- Blogs!\\n  - The devblogs from Discord have been moved over here!"},{"id":"/klipper-update","metadata":{"permalink":"/blog/klipper-update","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2024/04-24 Klipper update/index.mdx","source":"@site/blog/2024/04-24 Klipper update/index.mdx","title":"Klipper update","description":"Just a quick update","date":"2024-04-24T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":0.455,"hasTruncateMarker":true,"authors":[{"name":"David Zwart","title":"Founder / Lead Developer","url":"https://github.com/davidzwa","page":{"permalink":"/blog/authors/davidzwa"},"socials":{"github":"https://github.com/davidzwa","linkedin":"https://www.linkedin.com/in/david-zwart-88514083/"},"imageURL":"https://github.com/davidzwa.png","key":"davidzwa"}],"frontMatter":{"title":"Klipper update","authors":["davidzwa"],"tags":["devblog"],"slug":"/klipper-update","description":"Just a quick update"},"unlisted":false,"lastUpdatedAt":1730643485000,"lastUpdatedBy":"Maurice Kevenaar","prevItem":{"title":"Documentation site revamp","permalink":"/blog/documentation-site-revamp"},"nextItem":{"title":"Planning update","permalink":"/blog/planning-update"}},"content":"## Klipper support\\n\\nAfter the work on 1.6.2 I have started work on Klipper for FDM Monster 1.7.0 \ud83e\udd73\\n\\n![Update printer klipper](./img/klipper-update-printer.png)\\n\\n:::info UPDATE\\nAfter development we noticed Moonraker, by default, does not require an API key. This has been updated in the code\\n:::\\n\\n\x3c!-- truncate --\x3e\\n\\n## \u2754 Poll\\n\\nThe poll for filament tracking was announced a couple of days ago. The idea is to estimate what you are using for this, so integration work for FDM Monster can be planned around this in the future.\\nFind it [here](https://github.com/fdm-monster/fdm-monster/discussions/3142)"},{"id":"/planning-update","metadata":{"permalink":"/blog/planning-update","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2024/04-16 Planning update/index.mdx","source":"@site/blog/2024/04-16 Planning update/index.mdx","title":"Planning update","description":"Just a quick update","date":"2024-04-16T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":1.365,"hasTruncateMarker":true,"authors":[{"name":"David Zwart","title":"Founder / Lead Developer","url":"https://github.com/davidzwa","page":{"permalink":"/blog/authors/davidzwa"},"socials":{"github":"https://github.com/davidzwa","linkedin":"https://www.linkedin.com/in/david-zwart-88514083/"},"imageURL":"https://github.com/davidzwa.png","key":"davidzwa"}],"frontMatter":{"title":"Planning update","authors":["davidzwa"],"tags":["devblog"],"slug":"/planning-update","description":"Just a quick update"},"unlisted":false,"lastUpdatedAt":1730641007000,"lastUpdatedBy":"Maurice Kevenaar","prevItem":{"title":"Klipper update","permalink":"/blog/klipper-update"},"nextItem":{"title":"April 2024 Updates","permalink":"/blog/april-2024-updates"}},"content":"## \ud83d\udcc6 Planning\\n\\nThe past two weeks have been mostly about planning and refining the work for FDM Monster. It has become clearer to me and others that the project needs a cleaner roadmap.\\n\\nTogether with @Dyrant we\'ve been able to formalize the roadmap and shape the work into [Github Milestones](https://github.com/fdm-monster/fdm-monster/milestones)\\nThe result is a development cycle which slightly looks different than what was before:\\n\\n- a set of specific features are selected for a release (version 1.6.0)\\n- in a follow-up cycle, bugs are collected, prioritized and fixed (for example 1.6.1, 1.6.2 and so on)\\n- and then the next cycle: work towards a new release starts (for example 1.7.0 with Klipper support), but also work on documentation, site and overall code quality (administration)\\n\\n\x3c!-- truncate --\x3e\\n\\n![Milestones](./img/milestones.png)\\n\\n## \ud83e\udd4c Smooth ride towards 1.6.2\\n\\nThe updates for FDM Monster 1.6.2 have been long-awaited bugfixes! It really felt great to fix things like OctoFarm printer import, YAML import issues, SQLite database problems, and a bunch more of UI changes.\\n\\n![Import](./img/import.png)\\n\\nIt is mostly due to feedback by the likes of @Smart Home Sellout that gave the inspiration to add a GIF to clarify the OctoFarm printer import process. That was a huge improvement and a great idea.\\n\\n![Release 1.6.2](./img/1.6.2-update.png)\\n\\n## \ud83d\udda8\ufe0f Wait Klipper support in 1.7.0??\\n\\nYou read that right! Huge change, I\'m super stoked to get to work on this in the next weeks after 1.6.2 has been shipped.\\n\\n## \ud83e\udd42 Let\'s celebrate\\n\\nI just wanted to take a small moment to celebrate that FDM Monster is nearly 3 years old! Thanks for being with me along the way. You guys rock!"},{"id":"/april-2024-updates","metadata":{"permalink":"/blog/april-2024-updates","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2024/04-07 April 2024 Updates/index.mdx","source":"@site/blog/2024/04-07 April 2024 Updates/index.mdx","title":"April 2024 Updates","description":"Just a quick update","date":"2024-04-07T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":0.69,"hasTruncateMarker":true,"authors":[{"name":"David Zwart","title":"Founder / Lead Developer","url":"https://github.com/davidzwa","page":{"permalink":"/blog/authors/davidzwa"},"socials":{"github":"https://github.com/davidzwa","linkedin":"https://www.linkedin.com/in/david-zwart-88514083/"},"imageURL":"https://github.com/davidzwa.png","key":"davidzwa"}],"frontMatter":{"title":"April 2024 Updates","authors":["davidzwa"],"tags":["devblog"],"slug":"/april-2024-updates","description":"Just a quick update"},"unlisted":false,"lastUpdatedAt":1730641007000,"lastUpdatedBy":"Maurice Kevenaar","prevItem":{"title":"Planning update","permalink":"/blog/planning-update"},"nextItem":{"title":"Bit of a Break","permalink":"/blog/bit-of-a-break"}},"content":"## \ud83d\ude80 Updates\\n\\nThis week I have started the upgrade of the frontend UI of FDM Monster. I\'ve allocated quite some time to upgrade from Vue 2 to Vue 3. Luckily, this is not the first time I\'m doing this so it will be a feasible but impactful task.\\nI do want to emphasize that this gives mental space for Mobile Design of FDM Monster, something I\'ve been putting off quite a while now.\\n\\n\x3c!-- truncate --\x3e\\n\\n## \u2b06\ufe0f Release(s)\\n\\nfdm-monster-client version 1.5.8 - a tiny bugfix which fixes the Maintenance Dialog showing no content\\n\\n## \ud83c\udf10 News\\n\\nThis week for the Bun.js framework released 1.1 which is Windows compatible. They have attracted my attention for quite a while, and I will definitely explore Bun + NestJS as a replacement for NodeJS + Awilix.\\nRead about them [here](https://bun.sh/blog/bun-v1.1)"},{"id":"/bit-of-a-break","metadata":{"permalink":"/blog/bit-of-a-break","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2024/03-22 Bit of a break/index.mdx","source":"@site/blog/2024/03-22 Bit of a break/index.mdx","title":"Bit of a Break","description":"Just a quick update","date":"2024-03-22T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":1.07,"hasTruncateMarker":true,"authors":[{"name":"David Zwart","title":"Founder / Lead Developer","url":"https://github.com/davidzwa","page":{"permalink":"/blog/authors/davidzwa"},"socials":{"github":"https://github.com/davidzwa","linkedin":"https://www.linkedin.com/in/david-zwart-88514083/"},"imageURL":"https://github.com/davidzwa.png","key":"davidzwa"}],"frontMatter":{"title":"Bit of a Break","authors":["davidzwa"],"tags":["devblog"],"slug":"/bit-of-a-break","description":"Just a quick update"},"unlisted":false,"lastUpdatedAt":1730641007000,"lastUpdatedBy":"Maurice Kevenaar","prevItem":{"title":"April 2024 Updates","permalink":"/blog/april-2024-updates"},"nextItem":{"title":"Connectivity to OctoPrint","permalink":"/blog/connectivity-to-octoprint"}},"content":"## \ud83e\udd17 Bit of a break\\n\\nThe last few weeks I\'ve given myself a bit of a break.\\nThis was necessary after a lot of work was done recently. It is important to take rest every now and then!\\nThis was also a source of inspiration around this project. \ud83d\udca1\\n\\n\x3c!-- truncate --\x3e\\n\\n## \ud83d\ude80  Updates\\n\\nAs you have seen FDM Monster reached [Unraid Community Apps](https://unraid.net/community/apps?q=fdm+monster#r). This caused a bump of new users and a lot more views on Github and the main site.\\nThis sends a clear message that FDM Monster is in demand, but it is not easy enough to install. Platforms like Unraid make this easier. Noted!\\n\\n## \ud83d\udda8\ufe0f Development\\n\\nI started work on Moonraker integration yesterday using a virtual klipper printer (thanks to the people at Mainsail for creating this). Fascinating how different Moonraker is compared to OctoPrint.\\nIt is quite \\"open\\" in its API, compared to OctoPrint which locks down almost everything behind login, roles and permissions. Im eager to see the results.\\n\\n## \ud83e\udd14 Further notes\\n\\nIm thinking about the path forward with MonsterPi. Maybe I will convert it to a setup which deploys FDM Monster with  docker and portainer.\\nI hope we can spark a conversation about this! Please speak up if you have thoughts about this."},{"id":"/connectivity-to-octoprint","metadata":{"permalink":"/blog/connectivity-to-octoprint","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2024/01-26 Connectivity to OctoPrint/index.mdx","source":"@site/blog/2024/01-26 Connectivity to OctoPrint/index.mdx","title":"Connectivity to OctoPrint","description":"Just a quick update","date":"2024-01-26T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":0.445,"hasTruncateMarker":true,"authors":[{"name":"David Zwart","title":"Founder / Lead Developer","url":"https://github.com/davidzwa","page":{"permalink":"/blog/authors/davidzwa"},"socials":{"github":"https://github.com/davidzwa","linkedin":"https://www.linkedin.com/in/david-zwart-88514083/"},"imageURL":"https://github.com/davidzwa.png","key":"davidzwa"}],"frontMatter":{"title":"Connectivity to OctoPrint","authors":["davidzwa"],"tags":["devblog"],"slug":"/connectivity-to-octoprint","description":"Just a quick update"},"unlisted":false,"lastUpdatedAt":1730641007000,"lastUpdatedBy":"Maurice Kevenaar","prevItem":{"title":"Bit of a Break","permalink":"/blog/bit-of-a-break"},"nextItem":{"title":"MongoDB to SQLite","permalink":"/blog/mongodb_to_sqlite"}},"content":"This week I updated the connectivity to OctoPrint. I added more robust state updates, to make sure FDM Monster reports the right state in the UI.\\nThere are more tweaks to be done, but this is already great!\\nI tested it on OctoPrint 1.9.3 and I plan to test 1.8.x soon, to make sure you all will have a smooth ride.\\n\\nReleased in: 1.6.0\\n\\nWhen: soon\u2122\ufe0f\\n\\n\x3c!-- truncate --\x3e\\n\\n## Documentation\\n\\n@Dyrant and me gave the [documentation](https://docs.fdm-monster.net/) a thorough review. Lots of nice tweaks are coming (not yet visible)."},{"id":"/mongodb_to_sqlite","metadata":{"permalink":"/blog/mongodb_to_sqlite","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2023/12-25 MongoDB to SQLite/index.mdx","source":"@site/blog/2023/12-25 MongoDB to SQLite/index.mdx","title":"MongoDB to SQLite","description":"Just a quick update","date":"2023-12-25T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":0.98,"hasTruncateMarker":true,"authors":[{"name":"David Zwart","title":"Founder / Lead Developer","url":"https://github.com/davidzwa","page":{"permalink":"/blog/authors/davidzwa"},"socials":{"github":"https://github.com/davidzwa","linkedin":"https://www.linkedin.com/in/david-zwart-88514083/"},"imageURL":"https://github.com/davidzwa.png","key":"davidzwa"}],"frontMatter":{"title":"MongoDB to SQLite","authors":["davidzwa"],"tags":["devblog"],"slug":"/mongodb_to_sqlite","description":"Just a quick update"},"unlisted":false,"lastUpdatedAt":1730641007000,"lastUpdatedBy":"Maurice Kevenaar","prevItem":{"title":"Connectivity to OctoPrint","permalink":"/blog/connectivity-to-octoprint"},"nextItem":{"title":"Blog 6","permalink":"/blog/blog6"}},"content":"## An easier setup without external database\\n\\nTime for an update from my end. In the previous months I\'ve announced a shift from MongoDB to SQLite. The SQLite database code is nearing completion, and Im testing the server + web client together now. So far things seem to work beautifully!\\nThe migration process is not an easy one, and I want the transition from MongoDB to SQLite to be as smooth as possible for all existing users! Please hold tight for those reasons.\\nUsers starting afresh would not have this complex route, so if anyone is interested I can already look at releasing a test docker container with SQLite - **thumbs up below to show interest!**\\n\\n\x3c!-- truncate --\x3e\\n\\n## Next year\\n\\nPushing the project to the next quality level\\n\\nMy focus will be on:\\n\\n- fixing file list inconsistency on the backend (f.e. for batch uploads)\\n- making the OctoPrint socket connection more reliable, and making the web client refresh button more usable when the connection is disrupted\\n- improving the camera stream and statistics page\\n- docs\\n- small feature requests (like a \'group\' feature, or more feature-rich import from OctoFarm)\\n- UI responsiveness"},{"id":"/blog6","metadata":{"permalink":"/blog/blog6","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2023/09-22 Blog 6/index.mdx","source":"@site/blog/2023/09-22 Blog 6/index.mdx","title":"Blog 6","description":"Just a quick update","date":"2023-09-22T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":1.425,"hasTruncateMarker":true,"authors":[{"name":"David Zwart","title":"Founder / Lead Developer","url":"https://github.com/davidzwa","page":{"permalink":"/blog/authors/davidzwa"},"socials":{"github":"https://github.com/davidzwa","linkedin":"https://www.linkedin.com/in/david-zwart-88514083/"},"imageURL":"https://github.com/davidzwa.png","key":"davidzwa"}],"frontMatter":{"title":"Blog 6","authors":["davidzwa"],"tags":["devblog"],"slug":"/blog6","description":"Just a quick update"},"unlisted":false,"lastUpdatedAt":1730641007000,"lastUpdatedBy":"Maurice Kevenaar","prevItem":{"title":"MongoDB to SQLite","permalink":"/blog/mongodb_to_sqlite"},"nextItem":{"title":"Blog 5","permalink":"/blog/blog5"}},"content":"## Current progress \ud83d\udcaa\ud83c\udffc\\n\\nThe authentication mechanism is being finalized. There are some tweaks that need to be done in order to ensure it is user friendly. For example,  currently only one login is allowed to be active and refreshed at the same time. If the same user would login on another device, the first user login session would be logged out. This is not desirable.\\n\\nFurthermore, Ive started work on a first time setup page. Ill need testers for this soon.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Changes\\n\\n- login page\\n- switch to Typescript using SWC. Quite a bit of impact on installation and documentation.\\n- experimentation with MikroORM and SQLite as a relative database (required Typescript). It seems a success so far. FYI I intend to release this with an EXPERIMENTAL_SQLITE environment flag, so users with MongoDB will not see impact.\\n\\n## Next weeks \ud83d\uddd3\ufe0f\\n\\n- Adding a registration page (can be disabled)\\n- Adding first time setup page\\n- Updating docs and installation scripts\\n- Working towards server 1.5.0-rc1\\n- Lot of testing\\n- Planning features and bugfixes like MJPEG camera page/dialogs afterwards\\n\\n## Update 2023-09-30\\n\\nMikroORM is not the path I will be taking. Instead I\'ve headed into using TypeORM which I have 2 years of experience with. Ive managed to tackle the issues I had with it and managed to make it a much better dev experience.\\n\\nMikroORM failed to generate proper database migrations (basically bailing out), because SQLite is a very simplistic database. I\'ve spoken with its main author, and sadly I do not see a path forward with that ORM (Object Relational Mapper).\\nTypeORM supports the SQLite limitations much better (it seems), so I will continue on that path."},{"id":"/blog5","metadata":{"permalink":"/blog/blog5","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2023/07-23 Blog 5/index.mdx","source":"@site/blog/2023/07-23 Blog 5/index.mdx","title":"Blog 5","description":"Just a quick update","date":"2023-07-23T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":0.64,"hasTruncateMarker":true,"authors":[{"name":"David Zwart","title":"Founder / Lead Developer","url":"https://github.com/davidzwa","page":{"permalink":"/blog/authors/davidzwa"},"socials":{"github":"https://github.com/davidzwa","linkedin":"https://www.linkedin.com/in/david-zwart-88514083/"},"imageURL":"https://github.com/davidzwa.png","key":"davidzwa"}],"frontMatter":{"title":"Blog 5","authors":["davidzwa"],"tags":["devblog"],"slug":"/blog5","description":"Just a quick update"},"unlisted":false,"lastUpdatedAt":1730641007000,"lastUpdatedBy":"Maurice Kevenaar","prevItem":{"title":"Blog 6","permalink":"/blog/blog6"},"nextItem":{"title":"Blog 4","permalink":"/blog/blog4"}},"content":"## Current progress \ud83d\udcaa\ud83c\udffc\\n\\nAfter a lot of tinkering, the login system on the server has reached it\'s first usable stage. Next up: ensuring all API endpoints are authentication/role protected. (optional) registration and websocket protected. On the UI side, I\'m actively working on error handling and a login page \ud83d\udee1\ufe0f. Furthermore I\'ve been working on a camera page \ud83c\udfa6 .\\n\\n\x3c!-- truncate --\x3e\\n\\n## Next weeks  \ud83d\udcc6\\n\\n- The login, role and user mechanisms will be finalized.\\n- The webcam page will be finalized  (no WebRTC yet, purely MJPEG/HTTP).\\n- \ud83e\udeb2 I will work on a OctoPrint state connection state bug\\n- \ud83e\udeb2 A batch reprint bug\\n- Preference: cancellation stop vs emergency stop setting (cancellation by default) for all printer tiles / sidenav\\n\\nCatch you later!\\n\\nDavid"},{"id":"/blog4","metadata":{"permalink":"/blog/blog4","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2023/07-05 Blog 4/index.mdx","source":"@site/blog/2023/07-05 Blog 4/index.mdx","title":"Blog 4","description":"Just a quick update","date":"2023-07-05T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":1.265,"hasTruncateMarker":true,"authors":[{"name":"David Zwart","title":"Founder / Lead Developer","url":"https://github.com/davidzwa","page":{"permalink":"/blog/authors/davidzwa"},"socials":{"github":"https://github.com/davidzwa","linkedin":"https://www.linkedin.com/in/david-zwart-88514083/"},"imageURL":"https://github.com/davidzwa.png","key":"davidzwa"}],"frontMatter":{"title":"Blog 4","authors":["davidzwa"],"tags":["devblog"],"slug":"/blog4","description":"Just a quick update"},"unlisted":false,"lastUpdatedAt":1730641007000,"lastUpdatedBy":"Maurice Kevenaar","prevItem":{"title":"Blog 5","permalink":"/blog/blog5"},"nextItem":{"title":"Blog 3","permalink":"/blog/blog3"}},"content":"## Short update \ud83d\ude04\\n\\nI\'ve started the work on the server login system for FDM Monster 1.5.0-rc1. This login system needs to be implemented on the frontend, which I will tackle soon! Furthermore, together with @WindArrow \'s great help, I was able  work on tracking down some performance issues and associated fixes concering the reconnection of OctoPrints and preventing startup timeouts/slowdown. Some tweaking is still needed, but the server is more stable now even in case of powered down OctoPrints!\\n\\n\x3c!--truncate--\x3e\\n\\n## Next week \ud83d\udcc6\\n\\nAs mentioned above the login system is under development now \ud83d\udd12. The client\'s login form and authentication guard will be built next. This will be accompanied with a user registration form \xae\ufe0f  and first-time setup \ud83d\udde8\ufe0f . More importantly, I will add an admin setting to turn on or off login/authentication \ud83d\udd13, user registration \ud83e\uddd1\ud83c\udffc\u200d\ud83c\udfed  and a role management system \ud83c\udfed . Speaking of the role system, I will also start to test this and implement a page stating \\"You don\'t have the role to perform the action at this time\\" \ud83d\udd10 .\\nI will most likely release the login mechanic first and later start adding the roles. Would love to hear your feedback on what roles you would use in your farm workflow and team (and why!) \ud83c\udf99\ufe0f\\n\\n## Feedback \ud83d\udca1\\n\\n@Tobikiss and me are planning to send out a feedback form soon. Stay tuned or feel free to give suggestions in \u2060general or \u2060feature-requests if you feel like sharing your thoughts before the form is available!"},{"id":"/blog3","metadata":{"permalink":"/blog/blog3","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2023/06-10 Blog 3/index.mdx","source":"@site/blog/2023/06-10 Blog 3/index.mdx","title":"Blog 3","description":"Just a quick update","date":"2023-06-10T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":1.01,"hasTruncateMarker":true,"authors":[{"name":"David Zwart","title":"Founder / Lead Developer","url":"https://github.com/davidzwa","page":{"permalink":"/blog/authors/davidzwa"},"socials":{"github":"https://github.com/davidzwa","linkedin":"https://www.linkedin.com/in/david-zwart-88514083/"},"imageURL":"https://github.com/davidzwa.png","key":"davidzwa"}],"frontMatter":{"title":"Blog 3","authors":["davidzwa"],"tags":["devblog"],"slug":"/blog3","description":"Just a quick update"},"unlisted":false,"lastUpdatedAt":1730641007000,"lastUpdatedBy":"Maurice Kevenaar","prevItem":{"title":"Blog 4","permalink":"/blog/blog4"},"nextItem":{"title":"Blog 2","permalink":"/blog/blog2"}},"content":"## Short update \ud83d\ude04\\n\\nThis week I was working hard on 1.4.0 which involved mostly ensuring that MonsterPi images could actually update to that version, and that the client 1.2.0-rcx RC webapps could be downloaded just like the non-release candidates.\\nIt took a bit longer to build 1.4.0, but I really believe the work has paid off. Eager to fine-tune the webapp performance this week and get it out there soon!\\nFurthermore, I\'ve started work on GitReleaseManager which is a tool that will create release notes automatically (and it does a bunch more) starting with MonsterPi (for now).\\n\\n\x3c!--truncate--\x3e\\n\\n## Future \ud83d\udd0d\\n\\nThe work after will involve mostly improving the tile system with settings for changing the action button for fine grain print control. Secondly, I\'m working on a simple login system. Finally, I\'m looking at converting the client webapp to Vue 3, which is definitely a lot of work - luckily I\'ve done it before with great results. So, concluding, it\'s going nicely with FDM Monster right now.\\n\\nHave fun printing, whether it\'s for the heck of it, for nice things or for your business! :monster:\\nOh small side-note: [\u2060show-and-tell](https://discord.com/channels/864835453773807686/1048129598099034112) is perfect for showing your prints, if you feel like it!"},{"id":"/blog2","metadata":{"permalink":"/blog/blog2","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2023/05-25 Blog 2/index.mdx","source":"@site/blog/2023/05-25 Blog 2/index.mdx","title":"Blog 2","description":"Just a quick update","date":"2023-05-25T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":3.825,"hasTruncateMarker":true,"authors":[{"name":"David Zwart","title":"Founder / Lead Developer","url":"https://github.com/davidzwa","page":{"permalink":"/blog/authors/davidzwa"},"socials":{"github":"https://github.com/davidzwa","linkedin":"https://www.linkedin.com/in/david-zwart-88514083/"},"imageURL":"https://github.com/davidzwa.png","key":"davidzwa"}],"frontMatter":{"authors":["davidzwa"],"tags":["devblog"],"slug":"/blog2","description":"Just a quick update"},"unlisted":false,"lastUpdatedAt":1730641007000,"lastUpdatedBy":"Maurice Kevenaar","prevItem":{"title":"Blog 3","permalink":"/blog/blog3"},"nextItem":{"title":"Blog 1","permalink":"/blog/blog1"}},"content":"Hey there, welcome to the second installment of our blog series! If this is your first time diving into the FDMM server, we\'re excited to have you on board! \ud83d\ude04\\n\\n## \ud83d\udcc6 What Happened This Week (OctoPrint related)\\n\\nThis week, OctoPrint released a minor update, version 1.9.0. A big shoutout to all the contributors who made this release possible! You can check out the details of the [release 1.9.0](https://github.com/OctoPrint/OctoPrint/releases/tag/1.9.0).\\n\\nOne of the notable improvements in this release is the performance boost in the file list API. We\'ve already implemented measures to address this issue in FDMM, but this update will make our server even quicker regardless! \ud83d\ude0a Additionally, OctoPrint now supports multi-file upload, which could come in handy for us in the future. It\'s definitely something we\'ll keep in mind!\\n\\nApart from the performance enhancements, the OctoPrint team also fixed several annoying bugs in the announcements and wizard sections during setup. They even introduced a new webcam stack, which might interest you if you\'re in need of webcam functionality. Personally, I don\'t utilize it, but it\'s worth checking out!\\n\\n\x3c!--truncate--\x3e\\n\\n## \u23eb Should You Upgrade?\\n\\nIf you heavily rely on OctoPrint, I would recommend holding off on upgrading to version 1.9.0 just yet. As with any new release, there may be potential changes and issues that need time to settle and be addressed. So, it\'s generally a good idea to exercise caution and wait for the subsequent release, 1.9.1, before making the jump.\\n\\n### \ud83d\udee1\ufe0f Will FDMM Require OctoPrint 1.9.0?\\n\\nAt the moment, there is no pressing need for FDMM to require OctoPrint 1.9.0. However, we\'re constantly monitoring the situation and will keep you informed if any changes occur. Rest assured, we\'ll always strive to ensure compatibility and provide the best experience for our users!\\n\\n## \ud83d\udca1 Fancy Ideas for FDMM\\n\\nThis week has been full of exciting experimentation for FDMM (FDM Monster)! I had the opportunity to try out some fantastic features that I can\'t wait to share with you:\\n\\n\ud83d\udd39 Adding Fixed Gcode Templates: One of the highlights is the addition of fixed Gcode templates. Soon, you\'ll be able to upload these templates to any printer after completing maintenance or access them conveniently from the right-side menu. You can prepare handy slices like benchies or build-plate cleaning Gcode there. Of course, you will need to do the slicing for your printer to avoid uploading the wrong gcode.\\n\\n\ud83d\udd39 Role-Based Authorization and Local Login: I\'m thrilled to announce that role-based authorization and local login are on their way to becoming a part of FDMM (coming soon\u2122). This addition will enhance security and provide better control over user access.\\n\\n\ud83d\udd39 Repair Log: Keeping track of repairs will become easier! I\'m introducing a repair log feature that allows you to track your repairs over time. This feature will be integrated into FDMM, ensuring you have a comprehensive history of your maintenance activities.\\n\\n\ud83d\udd39 Nozzle and Sheet Information: I\'ve also made enhancements to the printer grid tile. Soon, you\'ll be able to see important details like nozzle type, nozzle diameter, and sheet type associated with a printer right on the grid tile. This improvement will make it more convenient to manage your printers.\\n\\n## \ud83d\udcda \ud83d\udee0\ufe0f What\'s Currently Being Worked On?\\n\\nExciting things are happening behind the scenes at FDMM! Here\'s a quick update on our ongoing projects:\\n\\n\ud83d\udcda Documentation on Gitbook: Our documentation is getting a makeover! Thanks to the efforts of our amazing team member @Dumnersm, we are in the process of porting the documentation to Gitbook. This move will make it easier for everyone to access and contribute to our growing knowledge base.\\n\\n\ud83d\udee0\ufe0f FDM Monster 1.4.0-rc1: I\'ve been hard at work on the upcoming FDM Monster version 1.4.0-rc1. This release will introduce the new OctoPrint socket adapter, which has been a significant undertaking. The server code has undergone extensive cleanup and optimization, making it more streamlined and efficient. These improvements will enable faster feature development and pave the way for the future migration to FDMM v2.\\n\\n## \ud83d\ude80 What\'s Next?\\n\\nWe have a release lined up for the near future:\\n\\n Server 1.3.10 Release: I\'ll be releasing server version 1.3.10 this week. This update will primarily focus on addressing minor bug fixes and making small tweaks to improve the overall user experience. If you encounter any issues, please report them in the \u2060general channel or through a GitHub issue.\\n\\nStay tuned for more updates, and don\'t hesitate to reach out if you have any questions or feedback. We appreciate your continued support as we strive to make FDMM the best it can be! \ud83d\ude80"},{"id":"/blog1","metadata":{"permalink":"/blog/blog1","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2023/05-16 Blog 1/index.mdx","source":"@site/blog/2023/05-16 Blog 1/index.mdx","title":"Blog 1","description":"Just a quick update","date":"2023-05-16T00:00:00.000Z","tags":[{"inline":true,"label":"devblog","permalink":"/blog/tags/devblog"}],"readingTime":2.515,"hasTruncateMarker":true,"authors":[{"name":"David Zwart","title":"Founder / Lead Developer","url":"https://github.com/davidzwa","page":{"permalink":"/blog/authors/davidzwa"},"socials":{"github":"https://github.com/davidzwa","linkedin":"https://www.linkedin.com/in/david-zwart-88514083/"},"imageURL":"https://github.com/davidzwa.png","key":"davidzwa"}],"frontMatter":{"authors":["davidzwa"],"tags":["devblog"],"slug":"/blog1","description":"Just a quick update"},"unlisted":false,"lastUpdatedAt":1730641007000,"lastUpdatedBy":"Maurice Kevenaar","prevItem":{"title":"Blog 2","permalink":"/blog/blog2"}},"content":"Hey you there! So I thought it fun to write a bit about the coding aspect of FDM Monster in a blog style. I\'ve been wanting to share the progress in a mini article like this, so you can follow the work a bit.\\n\\n## \ud83d\udcc6 What happened in May so far?\\n\\nAnother project, called OctoFarm, decided to call it quits, which was not unexpected given the silence on github. Even though this ending was not unexpected, it was still announced abruptly. After the announcement a small shift in the OctoPrint 3D Farm Print software ecosystem happened. Suddenly, it struck me, @Dyrant  and @Tobikiss that a replacement could be found in FDM Monster. After quite some chats with those fine aforementioned people and interesting folks like @tideline3d and @WindArrow, it was clear that FDM Monster (FDMM for short) needs a lot of improvements in order to get mature for the public. Documentation, a login system, more grid customization, a raspberry pi image (MonsterPi) and minor bugfixes were some of the topics.\\n\\nAfter these talks, a wave of people arrived into this discord and the Github suddenly showed a steady increase in view counts and clones. This gave me a big boost to work harder as now there are users using the software in their daily life, depending on it and in need of new features and expansion. It\'s so nice to see the project take off!\\n\\n\x3c!--truncate--\x3e\\n\\n## \ud83c\udfc3\ud83c\udffc\u200d\u2642\ufe0f What was achieved last weeks\\n\\nWith the release information in the \u2060releases and \u2060support-monsterpi in mind, you might have spotted new features started to pop up. Not only did the UI get some nice customization, the Raspberry Pi image MonsterPi was released to make running FDM Monster so much easier. Thirdly, a more professional Github workflow has slowly been adopted. For the tech savvy: the main branch is now stable and the develop branch is presented by default. The develop branch contains the latest work.\\nFinally, @Dumnersm decided to put his time into contributing nice tweaks for the documentation. It\'s really nice to get help and to spar about new ideas!\\n\\n## \ud83d\udd0d What\'s Next\\n\\nIt looks like @Dumnersm  is working on a new documentation system with git-book, which I\'m eager to see! Personally I\'m working on fixing the issue which causes the UI printer tiles to not update after a good while (hours) . This will lead to server 1.4.0-rc1 as it touched a lot of code [Issue #1632](https://github.com/fdm-monster/fdm-monster/issues/1632). During this work I hope to make the server event-driven. This basically means that the functions in the server are triggered when needed. To give an example: \\"A printer is deleted\\" will result in \\"the print job filename and progress state is cleared\\". This is an inversion in the way FDMM was initially written. And I strongly believe it will lead to a stronger server structure soon!\\n\\nDo let me know if what you like to see me write about next in  \u2060general. Hope to update you soon with another blog.\\n\\nYours truly,\\nDavid"}]}}')}}]);