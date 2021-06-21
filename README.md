# MiniBlog

## Description

You can post whatever you like for free

## Description of files

| filename | description |
| --- | --- |
| pages/api | api handler |
| pages/posts/[PostID].tsx | single opened post page |
| pages/search/[keyword].tsx | search results |
| pages/index.tsx | start page |
| pages/postList.tsx | listing all posts page |
| pages/postEdit.tsx | Draft page for writing a post |
| pages/myPosts.tsx | listing your posts page |
| pages/signIn.tsx | naver login page |
| pages/callback.tsx | callback page after naver login |

| config/firebaseConfig.js | firebase config including API key |
| lib/firebase.js | firebase initialization |

## Documentation
see [Wiki page](https://github.com/gjivaeri/blogProject/wiki)

## How to use
1. Login with your Google or Naver account
2. Post whatever you like

## Getting Started

### Installation
1. Clone the repo

```git clone https://github.com/gjivaeri/blogProject.git
```
2. Firebase API key is uploaded, so you don't need to set up database
3. npm install to get all the necessary modules
