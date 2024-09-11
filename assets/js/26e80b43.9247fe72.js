"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[4145],{65433:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=s(13274),a=s(78140);const r={title:"How to sign and verify Gravitino releases",slug:"/how-to-sign-releases",license:"This software is licensed under the Apache License version 2."},t=void 0,o={id:"how-to-sign-releases",title:"How to sign and verify Gravitino releases",description:"These instructions provide a guide to signing and verifying Apache Gravitino releases to enhance the security of releases. A signed release enables people to confirm the author of the release and guarantees that the code hasn't been altered.",source:"@site/versioned_docs/version-0.6.0-incubating/how-to-sign-releases.md",sourceDirName:".",slug:"/how-to-sign-releases",permalink:"/docs/0.6.0-incubating/how-to-sign-releases",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/how-to-sign-releases.md",tags:[],version:"0.6.0-incubating",lastUpdatedBy:"Qian Xia",lastUpdatedAt:1726031142e3,frontMatter:{title:"How to sign and verify Gravitino releases",slug:"/how-to-sign-releases",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"How to test",permalink:"/docs/0.6.0-incubating/how-to-test"},next:{title:"Publish Docker images",permalink:"/docs/0.6.0-incubating/publish-docker-images"}},l={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Platform support",id:"platform-support",level:2},{value:"Signing a release",id:"signing-a-release",level:2},{value:"Verifying a release",id:"verifying-a-release",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"These instructions provide a guide to signing and verifying Apache Gravitino releases to enhance the security of releases. A signed release enables people to confirm the author of the release and guarantees that the code hasn't been altered."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before signing or verifying a Gravitino release, ensure you have the following prerequisites installed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"GPG/GnuPG"}),"\n",(0,i.jsx)(n.li,{children:"Release artifacts"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"platform-support",children:"Platform support"}),"\n",(0,i.jsx)(n.p,{children:"These instructions are for macOS. You may need to make adjustments for other platforms."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"How to Install GPG or GnuPG:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.gnupg.org",children:"GnuPG"})," is an open-source implementation of the OpenPGP standard and allows you to encrypt and sign files or emails. GnuPG, also known as GPG, is a command line tool."]}),"\n",(0,i.jsx)(n.p,{children:"Check to see if GPG is installed by running the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"gpg -help\n"})}),"\n",(0,i.jsx)(n.p,{children:"If GPG/GnuPG isn't installed, run the following command to install it. You only need to do this step once."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"brew install gpg\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"signing-a-release",children:"Signing a release"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Create a Public/Private Key Pair:"})}),"\n",(0,i.jsx)(n.p,{children:"Check to see if you already have a public/private key pair by running the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"gpg --list-secret-keys\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you get no output, you'll need to generate a public/private key pair."}),"\n",(0,i.jsx)(n.p,{children:"Use this command to generate a public/private key pair. This is a one-time process. Setting the key expiry to 5 years and omitting a comment. All other defaults are acceptable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"gpg --full-generate-key\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of generating a public/private key pair by using the previous command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"gpg (GnuPG) 2.4.3; Copyright (C) 2023 g10 Code GmbH\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n(1) RSA and RSA\n(2) DSA and Elgamal\n(3) DSA (sign only)\n(4) RSA (sign only)\n(9) ECC (sign and encrypt) *default*\n(10) ECC (sign only)\n(14) Existing key from card\nYour selection?\nPlease select which elliptic curve you want:\n(1) Curve 25519 *default*\n(4) NIST P-384\n(6) Brainpool P-256\nYour selection?\nPlease specify how long the key should be valid.\n        0 = key does not expire\n    <n>  = key expires in n days\n    <n>w = key expires in n weeks\n    <n>m = key expires in n months\n    <n>y = key expires in n years\nKey is valid for? (0) 5y\nKey expires at Mon 13 Nov 16:08:58 2028 AEDT\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: John Smith\nEmail address: john@apache.org\nComment:\nYou selected this USER-ID:\n    \"John Smith <john@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? o\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\ngpg: revocation certificate stored as '/Users/justin/.gnupg/openpgp-revocs.d/CC6BD9B0A3A31A7ACFF9E1383DF672F671B7F722.rev'\npublic and secret key created and signed.\n\npub   ed25519 2023-11-15 [SC] [expires: 2028-11-13]\n    CC6BD9B0A3A31A7ACFF9E1383DF672F671B7F722\nuid                      John Smith <john@apache.org>\nsub   cv25519 2023-11-15 [E] [expires: 2028-11-13]\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"important",type:"caution",children:(0,i.jsx)(n.p,{children:"Keep your private key secure and saved somewhere other than just on your computer. Don't forget your key password, and also securely record it somewhere. If you lose your keys or forget your password, you won't be able to sign releases."})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Sign a release:"})}),"\n",(0,i.jsx)(n.p,{children:"To sign a release, use the following command for each release file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"gpg --detach-sign --armor <filename>.[zip|tar.gz]\n"})}),"\n",(0,i.jsx)(n.p,{children:"For example, to sign the Gravitino 0.2.0 release you would use this command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"gpg --detach-sign --armor gravitino.0.2.0.zip\n"})}),"\n",(0,i.jsx)(n.p,{children:"This generates an .asc file containing a PGP signature. Anyone can use this file and your public signature to verify the release."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Generate hashes for a release:"})}),"\n",(0,i.jsx)(n.p,{children:"Use the following command to generate hashes for a release:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"shasum -a 256 <filename>.[zip|tar.gz] > <filename>.[zip|tar.gz].sha256\n"})}),"\n",(0,i.jsx)(n.p,{children:"For example, to generate a hash for the Gravitino 0.2.0 release you would use this command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"shasum -a 256 gravitino.0.2.0.zip > gravitino.0.2.0.zip.sha256\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Copy your public key to the KEYS file:"})}),"\n",(0,i.jsx)(n.p,{children:"The KEYS file contains public keys used to sign previous releases. You only need to do this step once. Execute the following command to copy your public key to a KEY file and then append your KEY to the KEYS file. The KEYS file contains all the public keys used to sign previous releases."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"gpg --output KEY --armor --export <youremail>\ncat KEY >> KEYS\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Publish hashes and signatures:"})}),"\n",(0,i.jsx)(n.p,{children:"Upload the generated .asc and .sha256 files along with the release artifacts and KEYS file to the release area."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"verifying-a-release",children:"Verifying a release"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Import public keys:"})}),"\n",(0,i.jsx)(n.p,{children:"Download the KEYS file. Import the public keys used to sign all previous releases with this command. It doesn't matter if you have already imported the keys."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"gpg --import KEYS\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Verify the signature:"})}),"\n",(0,i.jsx)(n.p,{children:"Download the .asc and release files. Use the following command to verify the signature:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"gpg --verify <filename>.[zip|tar.gz].asc\n"})}),"\n",(0,i.jsx)(n.p,{children:'The output should contain the text "Good signature from ...".'}),"\n",(0,i.jsx)(n.p,{children:"For example to verify the Gravitino 0.2.0 zip file you would use this command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:" gpg --verify gravitino.0.2.0.zip.asc\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Verify the hashes:"})}),"\n",(0,i.jsx)(n.p,{children:"Check if the hashes match, using the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"diff -u <filename>.[zip|tar.gz].sha256 <(shasum -a 256 <filename>.[zip|tar.gz])\n"})}),"\n",(0,i.jsx)(n.p,{children:"For example to verify the Gravitino 2.0 zip file you would use this command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"diff -u gravitino.0.2.0.zip.sha256 <(shasum -a 256 gravitino.0.2.0.zip)\n"})}),"\n",(0,i.jsx)(n.p,{children:"This command ensures that the signatures match and that there are no differences between them."}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);