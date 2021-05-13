(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{535:function(t,e,a){t.exports=a.p+"assets/img/packet_sendpost.4776c346.png"},608:function(t,e,a){"use strict";a.r(e);var o=a(0),c=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"ibc-hello-world"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibc-hello-world"}},[t._v("#")]),t._v(" IBC Hello World")]),t._v(" "),o("p",[t._v("The Hello World example is a time-honored tradition in computer programming.")]),t._v(" "),o("p",[t._v("The Inter-Blockchain Communication protocol (IBC) is an important part of the Cosmos SDK ecosystem.")]),t._v(" "),o("p",[t._v("This tutorial builds an understanding of how to create and send packets across blockchain. This foundational knowledge helps you navigate between blockchains with the Cosmos SDK.")]),t._v(" "),o("p",[o("strong",[t._v("You will learn how to")])]),t._v(" "),o("ul",[o("li",[t._v("Use IBC to create and send packets between blockchains.")]),t._v(" "),o("li",[t._v("Navigate between blockchains using the Cosmos SDK and the Starport Relayer.")]),t._v(" "),o("li",[t._v("Create a basic blog post and save the post on another blockchain.")])]),t._v(" "),o("p",[o("em",[t._v("Follow this tutorial on YouTube")])]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.youtube.com/watch?v=NmytpuD33lY",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.ytimg.com/vi/NmytpuD33lY/hq720.jpg",alt:"IBC Hello World Tutorial"}}),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"what-is-cosmos-sdk-and-ibc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-cosmos-sdk-and-ibc"}},[t._v("#")]),t._v(" What is Cosmos SDK and IBC?")]),t._v(" "),o("p",[t._v("The Cosmos SDK is a framework to create a blockchain app. The Cosmos SDK allows developers to easily create custom blockchains that can natively interoperate with other blockchains.")]),t._v(" "),o("p",[t._v("The IBC module in the Cosmos SDK is the standard for the interaction between two blockchains. The IBC module defines how packets and messages are constructed to be interpreted by the sending and the receiving blockchain.")]),t._v(" "),o("p",[t._v("The Cosmos IBC relayer package lets you can connect between sets of IBC-enabled chains. This tutorial teaches you how to create two blockchains and then start and use the relayer with Starport to connect two blockchains.")]),t._v(" "),o("p",[t._v("This tutorial covers essentials like modules, IBC packets, relayer, and the lifecycle of packets routed through IBC.")]),t._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),o("p",[t._v("This tutorial requires "),o("a",{attrs:{href:"https://docs.starport.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Starport"),o("OutboundLink")],1),t._v(" v0.15.1.")]),t._v(" "),o("p",[o("strong",[t._v("Important")]),t._v(" The tutorial is based on this specific version of Starport and is not supported for other versions.")]),t._v(" "),o("p",[t._v("The Starport tool is the easiest way to build a blockchain.")]),t._v(" "),o("p",[t._v("To install "),o("code",[t._v("starport")]),t._v(" into "),o("code",[t._v("/usr/local/bin")]),t._v(", run the following command:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y3VybCBodHRwczovL2dldC5zdGFycG9ydC5uZXR3b3JrL3N0YXJwb3J0QHYwLjE1LjEhIHwgYmFzaAo="}}),t._v(" "),o("p",[t._v("When the installation succeeds, you see this message:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"SW5zdGFsbGVkIGF0IC91c3IvbG9jYWwvYmluL3N0YXJwb3J0Cg=="}}),t._v(" "),o("p",[t._v("You can use Starport in a "),o("a",{attrs:{href:"http://gitpod.io/#https://github.com/tendermint/starport/tree/v0.15.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("browser-based IDE"),o("OutboundLink")],1),t._v(", but this tutorial assumes you are using a local Starport installation. See "),o("a",{attrs:{href:"https://docs.starport.network/intro/install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Starport"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"create-a-blockchain-app"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-a-blockchain-app"}},[t._v("#")]),t._v(" Create a Blockchain App")]),t._v(" "),o("p",[t._v("Create a blockchain app with a blog module to write posts on other blockchains that contain the Hello World message. For this tutorial, you can write posts for the Cosmos SDK universe that contain Hello Mars, Hello Cosmos, and Hello Earth messages.")]),t._v(" "),o("p",[t._v("For this simple example, create an app that contains a blog module that has a post transaction with title and text.")]),t._v(" "),o("p",[t._v("After you define the logic, run two blockchains that have this module installed.")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("The chains can send posts between each other using IBC.")])]),t._v(" "),o("li",[o("p",[t._v("On the sending chain, save the "),o("code",[t._v("acknowledged")]),t._v(" and "),o("code",[t._v("timed out")]),t._v(" posts.")])])]),t._v(" "),o("p",[t._v("After the transaction is acknowledged by the receiving chain, you know that the post is saved on both blockchains.")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("The sending chain has the additional data "),o("code",[t._v("postID")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Sent posts that are acknowledged and timed out contain the title and the target chain of the post. These identifiers are visible on the parameter "),o("code",[t._v("chain")]),t._v(". The following chart shows the lifecycle of a packet that travels through IBC.")])])]),t._v(" "),o("p",[o("img",{attrs:{src:a(535),alt:"The Lifecycle of an IBC packet in the Blog Module"}})]),t._v(" "),o("h2",{attrs:{id:"build-your-blockchain-app"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-your-blockchain-app"}},[t._v("#")]),t._v(" Build your Blockchain App")]),t._v(" "),o("p",[t._v("Use Starport to scaffold the blockchain app and the blog module.")]),t._v(" "),o("h3",{attrs:{id:"build-the-new-blockchain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-the-new-blockchain"}},[t._v("#")]),t._v(" Build the new blockchain")]),t._v(" "),o("p",[t._v("To scaffold a new blockchain named "),o("code",[t._v("planet")]),t._v(":")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RhcnBvcnQgYXBwIGdpdGh1Yi5jb20vdXNlci9wbGFuZXQKY2QgcGxhbmV0Cg=="}}),t._v(" "),o("p",[t._v("A new directory named "),o("code",[t._v("planet")]),t._v(" is created in your home directory. The "),o("code",[t._v("planet")]),t._v(" directory contains a working blockchain app.")]),t._v(" "),o("h3",{attrs:{id:"scaffold-the-blog-module-inside-your-blockchain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scaffold-the-blog-module-inside-your-blockchain"}},[t._v("#")]),t._v(" Scaffold the blog module inside your blockchain")]),t._v(" "),o("p",[t._v("Next, use Starport to scaffold a blog module with IBC capabilities. The blog module contains the logic for creating blog posts and routing them through IBC to the second blockchain.")]),t._v(" "),o("p",[t._v("To scaffold a module named "),o("code",[t._v("blog")]),t._v(":")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RhcnBvcnQgbW9kdWxlIGNyZWF0ZSBibG9nIC0taWJjCg=="}}),t._v(" "),o("p",[t._v("A new directory with the code for an IBC module is created in "),o("code",[t._v("planet/x/blog")]),t._v(". Modules scaffolded with the "),o("code",[t._v("--ibc")]),t._v(" flag include all the logic for the scaffolded IBC module.")]),t._v(" "),o("h3",{attrs:{id:"generate-crud-actions-for-types"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generate-crud-actions-for-types"}},[t._v("#")]),t._v(" Generate CRUD actions for types")]),t._v(" "),o("p",[t._v("Next, create the CRUD actions for the blog module types.")]),t._v(" "),o("p",[t._v("Use the "),o("code",[t._v("starport type")]),t._v(" command to scaffold the boilerplate code for the create, read, update, and delete (CRUD) actions.")]),t._v(" "),o("p",[t._v("These "),o("code",[t._v("starport type")]),t._v(" commands create CRUD code for the following transactions:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Creating blog posts")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RhcnBvcnQgdHlwZSBwb3N0IHRpdGxlIGNvbnRlbnQgLS1tb2R1bGUgYmxvZwo="}})],1),t._v(" "),o("li",[o("p",[t._v("Processing acknowledgments for sent posts")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RhcnBvcnQgdHlwZSBzZW50UG9zdCBwb3N0SUQgdGl0bGUgY2hhaW4gLS1tb2R1bGUgYmxvZwo="}})],1),t._v(" "),o("li",[o("p",[t._v("Managing post timeouts")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RhcnBvcnQgdHlwZSB0aW1lZG91dFBvc3QgdGl0bGUgY2hhaW4gLS1tb2R1bGUgYmxvZwo="}})],1)]),t._v(" "),o("p",[t._v("The scaffolded code includes proto files for defining data structures, messages, messages handlers, keepers for modifying the state, and CLI commands.")]),t._v(" "),o("h3",{attrs:{id:"starport-type-command-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#starport-type-command-overview"}},[t._v("#")]),t._v(" Starport type command overview")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RhcnBvcnQgdHlwZSBbdHlwZU5hbWVdIFtmaWVsZDFdIFtmaWVsZDJdIC4uLiBbZmxhZ3NdCg=="}}),t._v(" "),o("p",[t._v("The first argument of the "),o("code",[t._v("starport type [typeName]")]),t._v(" command specifies the name of the type being created. For the blog app, you created "),o("code",[t._v("post")]),t._v(", "),o("code",[t._v("sentPost")]),t._v(", and "),o("code",[t._v("timedoutPost")]),t._v(" types.")]),t._v(" "),o("p",[t._v("The next arguments define the fields that are associated with the type. For the blog app, you created "),o("code",[t._v("title")]),t._v(", "),o("code",[t._v("content")]),t._v(", "),o("code",[t._v("postID")]),t._v(", and "),o("code",[t._v("chain")]),t._v(" fields.")]),t._v(" "),o("p",[t._v("The "),o("code",[t._v("--module")]),t._v(" flag defines which module the new transaction type is added to. This optional flag lets you manage multiple modules within your Starport app. The "),o("code",[t._v("--module")]),t._v(" specifies which module the type is scaffolded in. When the flag is not present, the type is scaffolded in the module that matches the name of the repo).")]),t._v(" "),o("h3",{attrs:{id:"scaffold-a-sendable-and-interpretable-ibc-packet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scaffold-a-sendable-and-interpretable-ibc-packet"}},[t._v("#")]),t._v(" Scaffold a sendable and interpretable IBC packet")]),t._v(" "),o("p",[t._v("Now you need to generate packet code that contains the title and the content of the blog post.")]),t._v(" "),o("p",[t._v("The "),o("code",[t._v("starport packet")]),t._v(" command creates the logic for an IBC packet that can be sent to another blockchain.")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("The "),o("code",[t._v("title")]),t._v(" and "),o("code",[t._v("content")]),t._v(" are stored on the target chain.")])]),t._v(" "),o("li",[o("p",[t._v("The "),o("code",[t._v("postID")]),t._v(" is acknowledged on the sending chain.")])])]),t._v(" "),o("p",[t._v("To scaffold a sendable and interpretable IBC packet:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RhcnBvcnQgcGFja2V0IGliY1Bvc3QgdGl0bGUgY29udGVudCAtLWFjayBwb3N0SUQgLS1tb2R1bGUgYmxvZwo="}}),t._v(" "),o("p",[t._v("Notice the fields in the "),o("code",[t._v("ibcPost")]),t._v(" packet match the fields in the "),o("code",[t._v("post")]),t._v(" type that you created earlier.")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("The "),o("code",[t._v("--ack")]),t._v(" flag defines which identifier is returned to the sending blockchain.")])]),t._v(" "),o("li",[o("p",[t._v("The "),o("code",[t._v("--module")]),t._v(" flag specifies to create the packet in a particular IBC module.")])])]),t._v(" "),o("p",[t._v("The "),o("code",[t._v("starport packet")]),t._v(" command also scaffolds the CLI command that is capable of sending an IBC packet:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGxhbmV0ZCB0eCBibG9nIHNlbmQtaWJjUG9zdCBbcG9ydElEXSBbY2hhbm5lbERdIFt0aXRsZV0gW2NvbnRlbnRdCg=="}}),t._v(" "),o("h2",{attrs:{id:"modify-the-source-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modify-the-source-code"}},[t._v("#")]),t._v(" Modify the Source Code")]),t._v(" "),o("p",[t._v("After you create the types and transactions, you must manually insert the logic to manage updates in the data tables. Modify the source code to save the data as specified earlier in this tutorial.")]),t._v(" "),o("h3",{attrs:{id:"add-creator-to-the-blog-post-packet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-creator-to-the-blog-post-packet"}},[t._v("#")]),t._v(" Add creator to the blog post packet")]),t._v(" "),o("p",[t._v("Start with the proto file that defines the structure of the IBC packet.")]),t._v(" "),o("p",[t._v("To identify the creator of the post in the receiving blockchain, add the creator field inside the packet. This field was not specified directly in the command because it would automatically become a parameter in the "),o("code",[t._v("SendIbcPost")]),t._v(" CLI command.")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gcGxhbmV0L3Byb3RvL2Jsb2cvcGFja2V0LnByb3RvCi8vIHRoaXMgbGluZSBpcyB1c2VkIGJ5IHN0YXJwb3J0IHNjYWZmb2xkaW5nICMgaWJjL3BhY2tldC9wcm90by9tZXNzYWdlCi8vIEliY1Bvc3RQYWNrZXREYXRhIGRlZmluZXMgYSBzdHJ1Y3QgZm9yIHRoZSBwYWNrZXQgcGF5bG9hZAptZXNzYWdlIEliY1Bvc3RQYWNrZXREYXRhIHsKICAgIHN0cmluZyB0aXRsZSA9IDE7CiAgICBzdHJpbmcgY29udGVudCA9IDI7CiAgICBzdHJpbmcgY3JlYXRvciA9IDM7IC8vICZsdDsgLS0tCn0K"}}),t._v(" "),o("p",[t._v("To make sure the receiving chain has content on the creator of a blog post, add this value to the IBC "),o("code",[t._v("packet")]),t._v(". The content of the "),o("code",[t._v("sender")]),t._v(" of the message is automatically included in "),o("code",[t._v("SendIbcPost")]),t._v(" message. The sender is verified as the signer of the message, so you can add the "),o("code",[t._v("msg.Sender")]),t._v(" as the creator to the new packet before it is sent over IBC.")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gcGxhbmV0L3gvYmxvZy9rZWVwZXIvbXNnX3NlcnZlcl9pYmNQb3N0LmdvCi8vIENvbnN0cnVjdCB0aGUgcGFja2V0CiAgICB2YXIgcGFja2V0IHR5cGVzLkliY1Bvc3RQYWNrZXREYXRhCgogICAgcGFja2V0LlRpdGxlID0gbXNnLlRpdGxlCiAgICBwYWNrZXQuQ29udGVudCA9IG1zZy5Db250ZW50CiAgICBwYWNrZXQuQ3JlYXRvciA9IG1zZy5TZW5kZXIgLy8gJmx0OyAtLS0KCiAgICAvLyBUcmFuc21pdCB0aGUgcGFja2V0CiAgICBlcnIgOj0gay5UcmFuc21pdEliY1Bvc3RQYWNrZXQoCiAgICAgICAgY3R4LAogICAgICAgIHBhY2tldCwKICAgICAgICBtc2cuUG9ydCwKICAgICAgICBtc2cuQ2hhbm5lbElELAogICAgICAgIGNsaWVudHR5cGVzLlplcm9IZWlnaHQoKSwKICAgICAgICBtc2cuVGltZW91dFRpbWVzdGFtcCwKICAgICkK"}}),t._v(" "),o("h3",{attrs:{id:"receive-the-post"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#receive-the-post"}},[t._v("#")]),t._v(" Receive the post")]),t._v(" "),o("p",[t._v("The methods for primary transaction logic are in the "),o("code",[t._v("planet/x/blog/keeper/ibcPost.go")]),t._v(" file. Use these methods to manage IBC packets:")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("TransmitIbcPostPacket")]),t._v(" is called manually to send the packet over IBC. This method also defines the logic before the packet is sent over IBC to another blockchain app.")]),t._v(" "),o("li",[o("code",[t._v("OnRecvIbcPostPacket")]),t._v(" hook is automatically called when a packet is received on the chain. This method defines the packet reception logic.")]),t._v(" "),o("li",[o("code",[t._v("OnAcknowledgementIbcPostPacket")]),t._v(" hook is called when a sent packet is acknowledged on the source chain. This method defines the logic when the packet has been received.")]),t._v(" "),o("li",[o("code",[t._v("OnTimeoutIbcPostPacket")]),t._v(" hook is called when a sent packet times out. This method defines the logic when the packet is not received on the target chain")])]),t._v(" "),o("p",[t._v("You must modify the source code to add the logic inside those functions so that the data tables are modified accordingly.")]),t._v(" "),o("p",[t._v("On reception of the post message, create a new post with the title and the content on the receiving chain.")]),t._v(" "),o("p",[t._v("To identify the blockchain app that a message is originating from and who created the message, use an identifier in the following format:")]),t._v(" "),o("p",[o("code",[t._v("<portID>-<channelID>-<creatorAddress>")])]),t._v(" "),o("p",[t._v("Finally, the Starport-generated AppendPost function returns the ID of the new appended post. You can return this value to the source chain through acknowledgment.")]),t._v(" "),o("p",[t._v("Append the type instance as "),o("code",[t._v("PostID")]),t._v(" on receiving the packet:")]),t._v(" "),o("ul",[o("li",[t._v("The context "),o("code",[t._v("ctx")]),t._v(" is an "),o("a",{attrs:{href:"https://docs.cosmos.network/master/core/context.html#go-context-package",target:"_blank",rel:"noopener noreferrer"}},[t._v("immutable data structure"),o("OutboundLink")],1),t._v(" that has header data from the transaction. See "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/types/context.go#L71",target:"_blank",rel:"noopener noreferrer"}},[t._v("how the context is initiated"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("The identifier format that you defined earlier")]),t._v(" "),o("li",[t._v("The "),o("code",[t._v("title")]),t._v(" is the Title of the blog post")]),t._v(" "),o("li",[t._v("The "),o("code",[t._v("content")]),t._v(" is the Content of the blog post")])]),t._v(" "),o("p",[t._v("In the "),o("code",[t._v("ibcPost.go")]),t._v(" file, make sure to import "),o("code",[t._v('"strconv"')]),t._v(" below "),o("code",[t._v('"errors"')]),t._v(", and then modify "),o("code",[t._v("OnRecvIbcPostPacket")]),t._v(" with the following code:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gcGxhbmV0L3gvYmxvZy9rZWVwZXIvaWJjUG9zdC5nbwovLyBPblJlY3ZJYmNQb3N0UGFja2V0IHByb2Nlc3NlcyBwYWNrZXQgcmVjZXB0aW9uCmZ1bmMgKGsgS2VlcGVyKSBPblJlY3ZJYmNQb3N0UGFja2V0KGN0eCBzZGsuQ29udGV4dCwgcGFja2V0IGNoYW5uZWx0eXBlcy5QYWNrZXQsIGRhdGEgdHlwZXMuSWJjUG9zdFBhY2tldERhdGEpIChwYWNrZXRBY2sgdHlwZXMuSWJjUG9zdFBhY2tldEFjaywgZXJyIGVycm9yKSB7CiAgICAvLyB2YWxpZGF0ZSBwYWNrZXQgZGF0YSB1cG9uIHJlY2VpdmluZwogICAgaWYgZXJyIDo9IGRhdGEuVmFsaWRhdGVCYXNpYygpOyBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gcGFja2V0QWNrLCBlcnIKICAgIH0KCiAgICBpZCA6PSBrLkFwcGVuZFBvc3QoCiAgICAgICAgY3R4LAogICAgICAgIHBhY2tldC5Tb3VyY2VQb3J0KyZxdW90Oy0mcXVvdDsrcGFja2V0LlNvdXJjZUNoYW5uZWwrJnF1b3Q7LSZxdW90OytkYXRhLkNyZWF0b3IsCiAgICAgICAgZGF0YS5UaXRsZSwKICAgICAgICBkYXRhLkNvbnRlbnQsCiAgICApCiAgICBwYWNrZXRBY2suUG9zdElEID0gc3RyY29udi5Gb3JtYXRVaW50KGlkLCAxMCkKCiAgICByZXR1cm4gcGFja2V0QWNrLCBuaWwKfQo="}}),t._v(" "),o("h3",{attrs:{id:"receive-the-post-acknowledgement"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#receive-the-post-acknowledgement"}},[t._v("#")]),t._v(" Receive the post acknowledgement")]),t._v(" "),o("p",[t._v("On the sending blockchain, store a "),o("code",[t._v("sentPost")]),t._v(" so you know that the post has been received on the target chain.")]),t._v(" "),o("p",[t._v("Store the title and the target to identify the post.")]),t._v(" "),o("p",[t._v("When a packet is scaffolded, the default type for the received acknowledgment data is a type that identifies if the packet treatment has failed. The "),o("code",[t._v("Acknowledgement_Error")]),t._v(" type is set if "),o("code",[t._v("OnRecvIbcPostPacket")]),t._v(" returns an error from the packet.")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gT25BY2tub3dsZWRnZW1lbnRJYmNQb3N0UGFja2V0IHJlc3BvbmRzIHRvIHRoZSB0aGUgc3VjY2VzcyBvciBmYWlsdXJlIG9mIGEgcGFja2V0Ci8vIGFja25vd2xlZGdlbWVudCB3cml0dGVuIG9uIHRoZSByZWNlaXZpbmcgY2hhaW4uCmZ1bmMgKGsgS2VlcGVyKSBPbkFja25vd2xlZGdlbWVudEliY1Bvc3RQYWNrZXQoY3R4IHNkay5Db250ZXh0LCBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwgZGF0YSB0eXBlcy5JYmNQb3N0UGFja2V0RGF0YSwgYWNrIGNoYW5uZWx0eXBlcy5BY2tub3dsZWRnZW1lbnQpIGVycm9yIHsKICAgIHN3aXRjaCBkaXNwYXRjaGVkQWNrIDo9IGFjay5SZXNwb25zZS4odHlwZSkgewogICAgY2FzZSAqY2hhbm5lbHR5cGVzLkFja25vd2xlZGdlbWVudF9FcnJvcjoKICAgICAgICAvLyBXZSB3aWxsIG5vdCB0cmVhdCBhY2tub3dsZWRnbWVudCBlcnJvciBpbiB0aGlzIHR1dG9yaWFsCiAgICAgICAgcmV0dXJuIG5pbAogICAgY2FzZSAqY2hhbm5lbHR5cGVzLkFja25vd2xlZGdlbWVudF9SZXN1bHQ6CiAgICAgICAgLy8gRGVjb2RlIHRoZSBwYWNrZXQgYWNrbm93bGVkZ21lbnQKICAgICAgICB2YXIgcGFja2V0QWNrIHR5cGVzLkliY1Bvc3RQYWNrZXRBY2sKICAgICAgICBlcnIgOj0gcGFja2V0QWNrLlVubWFyc2hhbChkaXNwYXRjaGVkQWNrLlJlc3VsdCkKICAgICAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICAgICAgLy8gVGhlIGNvdW50ZXItcGFydHkgbW9kdWxlIGRvZXNuJ3QgaW1wbGVtZW50IHRoZSBjb3JyZWN0IGFja25vd2xlZGdtZW50IGZvcm1hdAogICAgICAgICAgICByZXR1cm4gZXJyb3JzLk5ldygmcXVvdDtjYW5ub3QgdW5tYXJzaGFsIGFja25vd2xlZGdtZW50JnF1b3Q7KQogICAgICAgIH0KCiAgICAgICAgay5BcHBlbmRTZW50UG9zdCgKICAgICAgICAgICAgY3R4LAogICAgICAgICAgICBkYXRhLkNyZWF0b3IsCiAgICAgICAgICAgIHBhY2tldEFjay5Qb3N0SUQsCiAgICAgICAgICAgIGRhdGEuVGl0bGUsCiAgICAgICAgICAgIHBhY2tldC5EZXN0aW5hdGlvblBvcnQrJnF1b3Q7LSZxdW90OytwYWNrZXQuRGVzdGluYXRpb25DaGFubmVsLAogICAgICAgICkKCiAgICAgICAgcmV0dXJuIG5pbAogICAgZGVmYXVsdDoKICAgICAgICAvLyBUaGUgY291bnRlci1wYXJ0eSBtb2R1bGUgZG9lc24ndCBpbXBsZW1lbnQgdGhlIGNvcnJlY3QgYWNrbm93bGVkZ21lbnQgZm9ybWF0CiAgICAgICAgcmV0dXJuIGVycm9ycy5OZXcoJnF1b3Q7aW52YWxpZCBhY2tub3dsZWRnbWVudCBmb3JtYXQmcXVvdDspCiAgICB9Cn0K"}}),t._v(" "),o("h3",{attrs:{id:"store-information-about-the-timed-out-packet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#store-information-about-the-timed-out-packet"}},[t._v("#")]),t._v(" Store information about the timed-out packet")]),t._v(" "),o("p",[t._v("Store posts that have not been received by target chains in "),o("code",[t._v("timedoutPost")]),t._v(" posts. This logic follows the same format as "),o("code",[t._v("sentPost")]),t._v(".")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gT25UaW1lb3V0SWJjUG9zdFBhY2tldCByZXNwb25kcyB0byB0aGUgY2FzZSB3aGVyZSBhIHBhY2tldCBoYXMgbm90IGJlZW4gdHJhbnNtaXR0ZWQgYmVjYXVzZSBvZiBhIHRpbWVvdXQKZnVuYyAoayBLZWVwZXIpIE9uVGltZW91dEliY1Bvc3RQYWNrZXQoY3R4IHNkay5Db250ZXh0LCBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwgZGF0YSB0eXBlcy5JYmNQb3N0UGFja2V0RGF0YSkgZXJyb3IgewoKICAgIGsuQXBwZW5kVGltZWRvdXRQb3N0KAogICAgICAgIGN0eCwKICAgICAgICBkYXRhLkNyZWF0b3IsCiAgICAgICAgZGF0YS5UaXRsZSwKICAgICAgICBwYWNrZXQuRGVzdGluYXRpb25Qb3J0KyZxdW90Oy0mcXVvdDsrcGFja2V0LkRlc3RpbmF0aW9uQ2hhbm5lbCwKICAgICkKCiAgICByZXR1cm4gbmlsCn0K"}}),t._v(" "),o("p",[t._v("This last step completes the basic "),o("code",[t._v("blog")]),t._v(" module setup. The blockchain is now ready!")]),t._v(" "),o("h2",{attrs:{id:"use-the-ibc-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-the-ibc-modules"}},[t._v("#")]),t._v(" Use the IBC Modules")]),t._v(" "),o("p",[t._v("You can now spin up the blockchain and send a blog post from one blockchain app to the other. Multiple terminal windows are required to complete these next steps.")]),t._v(" "),o("h3",{attrs:{id:"test-the-ibc-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#test-the-ibc-modules"}},[t._v("#")]),t._v(" Test the IBC modules")]),t._v(" "),o("p",[t._v("To test the IBC module, start two blockchain networks on the same machine. Both blockchains use the same source code. Each blockchain has a unique chain ID.")]),t._v(" "),o("p",[t._v("One blockchain is named "),o("code",[t._v("earth")]),t._v(" and the other blockchain is named "),o("code",[t._v("mars")]),t._v(".")]),t._v(" "),o("p",[t._v("The following files are required in the project directory:")]),t._v(" "),o("p",[o("code",[t._v("planet/earth.yml")])]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"YWNjb3VudHM6CiAgLSBuYW1lOiBhbGljZQogICAgY29pbnM6IFsmcXVvdDsxMDAwdG9rZW4mcXVvdDssICZxdW90OzEwMDAwMDAwMHN0YWtlJnF1b3Q7XQogIC0gbmFtZTogYm9iCiAgICBjb2luczogWyZxdW90OzUwMHRva2VuJnF1b3Q7XQp2YWxpZGF0b3I6CiAgbmFtZTogYWxpY2UKICBzdGFrZWQ6ICZxdW90OzEwMDAwMDAwMHN0YWtlJnF1b3Q7CmZhdWNldDoKICBuYW1lOiBib2IKICBjb2luczogWyZxdW90OzV0b2tlbiZxdW90O10KZ2VuZXNpczoKICBjaGFpbl9pZDogJnF1b3Q7ZWFydGgmcXVvdDsKaW5pdDoKICBob21lOiAmcXVvdDskSE9NRS8uZWFydGgmcXVvdDsK"}}),t._v(" "),o("p",[o("code",[t._v("planet/mars.yml")])]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"YWNjb3VudHM6CiAgLSBuYW1lOiBhbGljZQogICAgY29pbnM6IFsmcXVvdDsxMDAwdG9rZW4mcXVvdDssICZxdW90OzEwMDAwMDAwMDBzdGFrZSZxdW90O10KICAtIG5hbWU6IGJvYgogICAgY29pbnM6IFsmcXVvdDs1MDB0b2tlbiZxdW90O10KdmFsaWRhdG9yOgogIG5hbWU6IGFsaWNlCiAgc3Rha2VkOiAmcXVvdDsxMDAwMDAwMDBzdGFrZSZxdW90OwpmYXVjZXQ6CiAgaG9zdDogJnF1b3Q7OjQ1MDEmcXVvdDsKICBuYW1lOiBib2IKICBjb2luczoKICAgIC0gJnF1b3Q7NXRva2VuJnF1b3Q7Cmhvc3Q6CiAgcnBjOiAmcXVvdDs6MjY2NTkmcXVvdDsKICBwMnA6ICZxdW90OzoyNjY1OCZxdW90OwogIHByb2Y6ICZxdW90Ozo2MDYxJnF1b3Q7CiAgZ3JwYzogJnF1b3Q7OjkwOTEmcXVvdDsKICBhcGk6ICZxdW90OzoxMzE4JnF1b3Q7CiAgZnJvbnRlbmQ6ICZxdW90Ozo4MDgxJnF1b3Q7CiAgZGV2LXVpOiAmcXVvdDs6MTIzNDYmcXVvdDsKZ2VuZXNpczoKICBjaGFpbl9pZDogJnF1b3Q7bWFycyZxdW90Owppbml0OgogIGhvbWU6ICZxdW90OyRIT01FLy5tYXJzJnF1b3Q7Cg=="}}),t._v(" "),o("p",[t._v("Open a terminal window and run the following command to start the "),o("code",[t._v("earth")]),t._v(" blockchain:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c3RhcnBvcnQgc2VydmUgLWMgZWFydGgueW1sCg=="}}),t._v(" "),o("p",[t._v("Open a different terminal window and run the following command to start the "),o("code",[t._v("mars")]),t._v(" blockchain:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c3RhcnBvcnQgc2VydmUgLWMgbWFycy55bWwK"}}),t._v(" "),o("h3",{attrs:{id:"configure-and-start-the-relayer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-and-start-the-relayer"}},[t._v("#")]),t._v(" Configure and start the relayer")]),t._v(" "),o("p",[t._v("First, configure the relayer. Use the Starport "),o("code",[t._v("configure")]),t._v(" command with the "),o("code",[t._v("--advanced")]),t._v(" option:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c3RhcnBvcnQgcmVsYXllciBjb25maWd1cmUgLS1hZHZhbmNlZCAtLXNvdXJjZS1ycGMgJnF1b3Q7aHR0cDovLzAuMC4wLjA6MjY2NTcmcXVvdDsgLS1zb3VyY2UtZmF1Y2V0ICZxdW90O2h0dHA6Ly8wLjAuMC4wOjQ1MDAmcXVvdDsgLS1zb3VyY2UtcG9ydCAmcXVvdDtibG9nJnF1b3Q7IC0tc291cmNlLXZlcnNpb24gJnF1b3Q7YmxvZy0xJnF1b3Q7IC0tdGFyZ2V0LXJwYyAmcXVvdDtodHRwOi8vMC4wLjAuMDoyNjY1OSZxdW90OyAtLXRhcmdldC1mYXVjZXQgJnF1b3Q7aHR0cDovLzAuMC4wLjA6NDUwMSZxdW90OyAtLXRhcmdldC1wb3J0ICZxdW90O2Jsb2cmcXVvdDsgLS10YXJnZXQtdmVyc2lvbiAmcXVvdDtibG9nLTEmcXVvdDsK"}}),t._v(" "),o("p",[t._v("The output looks like:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tClNldHRpbmcgdXAgY2hhaW5zCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQoK8J+UkCAgQWNjb3VudCBvbiAmcXVvdDtzb3VyY2UmcXVvdDsgaXMgJnF1b3Q7Y29zbW9zMXhjeGd6cTc1eXJ4emQwdHUya3dtd2FqdjdqNTUwZGtqN20wMHphJnF1b3Q7CgogfMK3IHJlY2VpdmVkIGNvaW5zIGZyb20gYSBmYXVjZXQKIHzCtyAoYmFsYW5jZTogNXRva2VuKQoK8J+UkCAgQWNjb3VudCBvbiAmcXVvdDt0YXJnZXQmcXVvdDsgaXMgJnF1b3Q7Y29zbW9zMW54ZzhlNG1mcDV2N3NlYTZlejIzYTY1cnZ5MGo1OWtheXFyOGN4JnF1b3Q7CgogfMK3IHJlY2VpdmVkIGNvaW5zIGZyb20gYSBmYXVjZXQKIHzCtyAoYmFsYW5jZTogNXRva2VuKQoK4puTICBDb25maWd1cmVkIGNoYWluczogZWFydGgtbWFycwo="}}),t._v(" "),o("p",[t._v("Then, start the relayer process in a separate terminal window:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c3RhcnBvcnQgcmVsYXllciBjb25uZWN0Cg=="}}),t._v(" "),o("p",[t._v("Results:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"8J+UjCAgTGlua2VkIGNoYWlucyB3aXRoIDEgcGF0aHMuCgotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KQ2hhaW5zIGJ5IHBhdGhzCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQoKZWFydGgtbWFyczoKICAgIGVhcnRoICZndDsgKHBvcnQ6IGJsb2cpIChjaGFubmVsOiBjaGFubmVsLTApCiAgICBtYXJzICAmZ3Q7IChwb3J0OiBibG9nKSAoY2hhbm5lbDogY2hhbm5lbC0wKQoKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCkxpc3RlbmluZyBhbmQgcmVsYXlpbmcgcGFja2V0cyBiZXR3ZWVuIGNoYWlucy4uLgotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0K"}}),t._v(" "),o("h3",{attrs:{id:"send-packets"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#send-packets"}},[t._v("#")]),t._v(" Send packets")]),t._v(" "),o("p",[t._v("You can now send packets and verify the received posts:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cGxhbmV0ZCB0eCBibG9nIHNlbmQtaWJjUG9zdCBibG9nIGNoYW5uZWwtMCAmcXVvdDtIZWxsbyZxdW90OyAmcXVvdDtIZWxsbyBNYXJzLCBJJ20gQWxpY2UgZnJvbSBFYXJ0aCZxdW90OyAtLWZyb20gYWxpY2UgLS1jaGFpbi1pZCBlYXJ0aCAtLWhvbWUgfi8uZWFydGgK"}}),t._v(" "),o("p",[t._v("To verify that the post has been received on Mars:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cGxhbmV0ZCBxIGJsb2cgbGlzdC1wb3N0IC0tbm9kZSB0Y3A6Ly9sb2NhbGhvc3Q6MjY2NTkK"}}),t._v(" "),o("p",[t._v("The packet has been received:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"UG9zdDoKLSBjb250ZW50OiBIZWxsbyBNYXJzLCBJJ20gQWxpY2UgZnJvbSBFYXJ0aAogIGNyZWF0b3I6IGJsb2ctY2hhbm5lbC0wLWNvc21vczFhZXc4ZGs5Y3MzdXp6Z2VsZGF0Z3p2bTVjYTJrNG05OHhoeTIweAogIGlkOiAmcXVvdDswJnF1b3Q7CiAgdGl0bGU6IEhlbGxvCnBhZ2luYXRpb246CiAgbmV4dF9rZXk6IG51bGwKICB0b3RhbDogJnF1b3Q7MSZxdW90Owo="}}),t._v(" "),o("p",[t._v("To check if the packet has been acknowledged on Earth:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cGxhbmV0ZCBxIGJsb2cgbGlzdC1zZW50UG9zdAo="}}),t._v(" "),o("p",[t._v("Output:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"U2VudFBvc3Q6Ci0gY2hhaW46IGJsb2ctY2hhbm5lbC0wCiAgY3JlYXRvcjogY29zbW9zMWFldzhkazljczN1enpnZWxkYXRnenZtNWNhMms0bTk4eGh5MjB4CiAgaWQ6ICZxdW90OzAmcXVvdDsKICBwb3N0SUQ6ICZxdW90OzAmcXVvdDsKICB0aXRsZTogSGVsbG8KcGFnaW5hdGlvbjoKICBuZXh0X2tleTogbnVsbAogIHRvdGFsOiAmcXVvdDsxJnF1b3Q7Cg=="}}),t._v(" "),o("p",[t._v("To test timeout, set the timeout time of a packet to 1 nanosecond, verify that the packet is timed out, and check the timed-out posts:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cGxhbmV0ZCB0eCBibG9nIHNlbmQtaWJjUG9zdCBibG9nIGNoYW5uZWwtMCAmcXVvdDtTb3JyeSZxdW90OyAmcXVvdDtTb3JyeSBNYXJzLCB5b3Ugd2lsbCBuZXZlciBzZWUgdGhpcyBwb3N0JnF1b3Q7IC0tZnJvbSBhbGljZSAtLWNoYWluLWlkIGVhcnRoIC0taG9tZSB+Ly5lYXJ0aCAtLXBhY2tldC10aW1lb3V0LXRpbWVzdGFtcCAxCg=="}}),t._v(" "),o("p",[t._v("Check the timed-out posts:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cGxhbmV0ZCBxIGJsb2cgbGlzdC10aW1lZG91dFBvc3QK"}}),t._v(" "),o("p",[t._v("Results:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"VGltZWRvdXRQb3N0OgotIGNoYWluOiBibG9nLWNoYW5uZWwtMAogIGNyZWF0b3I6IGNvc21vczFmaHBjc3huMGc4dWFzazczeHBjZ3d4bGZ4dHV1bm4zZXk1cHRqdgogIGlkOiAmcXVvdDswJnF1b3Q7CiAgdGl0bGU6IFNvcnJ5CnBhZ2luYXRpb246CiAgbmV4dF9rZXk6IG51bGwKICB0b3RhbDogJnF1b3Q7MiZxdW90Owo="}}),t._v(" "),o("p",[t._v("You can also send a post from Mars:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cGxhbmV0ZCB0eCBibG9nIHNlbmQtaWJjUG9zdCBibG9nIGNoYW5uZWwtMCAmcXVvdDtIZWxsbyZxdW90OyAmcXVvdDtIZWxsbyBFYXJ0aCwgSSdtIEFsaWNlIGZyb20gTWFycyZxdW90OyAtLWZyb20gYWxpY2UgLS1jaGFpbi1pZCBtYXJzIC0taG9tZSB+Ly5tYXJzIC0tbm9kZSB0Y3A6Ly9sb2NhbGhvc3Q6MjY2NTkK"}}),t._v(" "),o("p",[t._v("List post on Earth:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cGxhbmV0ZCBxIGJsb2cgbGlzdC1wb3N0Cg=="}}),t._v(" "),o("p",[t._v("Results:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"UG9zdDoKLSBjb250ZW50OiBIZWxsbyBFYXJ0aCwgSSdtIEFsaWNlIGZyb20gTWFycwogIGNyZWF0b3I6IGJsb2ctY2hhbm5lbC0wLWNvc21vczF4dHB4NDNsODI2MzQ4czU5YXUyNHAyMnB4ZzZxMjQ4NjM4cTJ0ZgogIGlkOiAmcXVvdDswJnF1b3Q7CiAgdGl0bGU6IEhlbGxvCnBhZ2luYXRpb246CiAgbmV4dF9rZXk6IG51bGwKICB0b3RhbDogJnF1b3Q7MSZxdW90Owo="}}),t._v(" "),o("h2",{attrs:{id:"🎉-congratulations-🎉"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#🎉-congratulations-🎉"}},[t._v("#")]),t._v(" 🎉 Congratulations 🎉")]),t._v(" "),o("p",[t._v("By completing this tutorial, you've learned to build an IBC module for the Cosmos SDK, build your own blockchain app, modify the source code, and use the Inter-Blockchain Communication protocol (IBC).")]),t._v(" "),o("p",[t._v("Here's what you accomplished in this tutorial:")]),t._v(" "),o("ul",[o("li",[t._v("Built a Hello World blockchain app as an IBC module")]),t._v(" "),o("li",[t._v("Modified the generated code to add CRUD action logic")]),t._v(" "),o("li",[t._v("Used the relayer to connect two blockchains with each other")]),t._v(" "),o("li",[t._v("Transferred IBC packets from one blockchain to another")])])],1)}),[],!1,null,null,null);e.default=c.exports}}]);