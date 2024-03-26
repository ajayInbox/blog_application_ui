export const newData = {
    "articleBanner":"https://images.unsplash.com/photo-1708861177937-70c66c166609?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "articleTitle":"Why Should You Learn React in 2024?",
    "articleTags":"React,frontend,Javascript,Jsx",
    "articleContent":`
    Can you save your articles or reading list from DEV?

Most of you would say NO.
There was no way, but I've done it.
I've created a solution where you can do it in under 5 minutes.
Yep, under 5 minutes.

The best part?

It will automatically save every day.
It will be on GitHub so your data is secured and in your hands.
No need to log in to any software. One less hassle!
Bunch of useful options (we will talk about that).
Most important -> It's FREE & Open Source.

I'm ultra excited. Read till the end.

 

Table of Contents
This is a long post, so these are the topics we are going to cover.

Why did I create this in the first place?
Why it's better than a normal solution?
Why GitHub Actions workflow?
Visual samples of what the workflow does.
What's in the documentation?
What do you need?
The options you get with the workflow. A basic idea.
1. Why did I create this in the first place?
I was looking for a way to save my posts from DEV, but there isn't. Hashnode does provide it, but it's just a formality. Their structure is very general, and they don't provide many options.

So, I thought I should build it myself for DEV.

I've done the initial version, and it feels good. Now, I will take the feedback and improve it further.

Special thanks to Michael Sir (@michaeltharrington) & Thomas Sir (@thomasbnt) for giving an initial thumbs up to the idea in the discord community :D

2. Why it's better than a normal solution?
This solution will save each article in a different markdown file.

The best part is that you can create a table of contents in the readme to view and visit each of your articles in the saved repository. Easy navigation!

You can also display the total read time for each article in the reading list.

I've also included a concept of prioritizing tags while saving your reading list (section 7).

3. Why GitHub Actions workflow?
You can create web software, but then managing it can become a hassle. This workflow runs daily, making it a one-time effort.

Whenever the workflow is improved, you won't even have to update it. It happens automatically—voila!

What more do you need?

4. Visual samples of what the workflow does.
Let's skip everything and see what you can do.

I'm using images for examples so it's easy for you to understand.

This is how each of your posts will look like.

markdown file of each article

The structure of each article markdown file would be as follows:

Cover Banner Image
Article Title
Tags of the Article
Published Date
URL of the Article
Content of the Article
article saved structure

The table of contents for your article will be as shown below. You can easily navigate to your article in the repository by clicking the provided link.
This is for easier navigation when you have a very long list of posts.

table of contents

You can save your reading list like this.

reading list

You can even add read time for each article in the reading list.

reading time

5. What's in the documentation?
I've made it with proper consideration so that everyone irrespective of whether they know things or not, can follow along.

🚀 Getting Started: A guide to help you set up and use DevtoGitHub.
List of examples with workflow code: Examples demonstrating various use cases.
Contributing guidelines: Instructions for contributing to DevtoGitHub.
Use cases of the solution: use cases showcasing how DevtoGitHub can be used.
Input options of the workflow: Details about each input option to use in the workflow.
I've even given samples of cron schedules.
Trust me! The documentation is good.

6. What do you need?
Nothing at all!

You can start with this step-by-step guide that I've created.

In short, you need to do these steps only once.

Generating an API token from DEV.
Create a GitHub Account.
Create a GitHub repository.
Giving permissions to workflow to write in the repository.
Creating a Secret using the API token from DEV.
Don't worry if the terms are scary. I've provided proper visual samples and detailed instructions so it will be easy and quick.

After this, you can create a workflow file, and done!

The documentation is linked, so it is easy for you to follow along. You can use this to see the steps.

7. The options you get with the workflow - basic idea.
Here comes the technical part of the solution that you should understand. I will cover all the options that you can use.

I've already prepared detailed documentation with examples, which you can find here for a deeper understanding. It covers the syntax along with default values.

I could have just covered this section, but not everyone on DEV is a programmer, so it's better to keep it for everyone regardless of their programming background.

The workflow will look like this more or less.
name: DevtoGitHub

on:
  schedule:
    - cron: "0 0 * * *" # Run daily, adjust as needed
  # The lines below will allow you to manually run the workflow with each commit
  workflow_dispatch:
  push:
    branches: ["main"]

jobs:
  save-articles:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Run DevtoGitHub
        uses: Anmol-Baranwal/DevtoGitHub@v1
        with:
          devApiKey:
          saveArticles: true # default
          outputDir: "articles" # this will save the articles in "articles" directory
          saveArticlesReadme: true # this will create a table of content for easy navigation
Let's see the options.

devApiKey

The API key from your DEV.

saveArticles

Save your articles as markdown files, with each file named after the article's title.

outputDir

The directory to save your articles. The default will save it under the articles directory.

saveArticlesReadme

To create a table of contents for your articles in readme (same directory)

readingList

To create a reading list from DEV

readTime

This will add reading time to the articles in the reading list.

outputDirReading

Define the output directory for the reading list (Readme.md).

excludeTags & mustIncludeTags

I was exploring a bit.
And I didn't want any discussion posts (#discuss) unless they were related to programming (#programming). This is what you can do with this.

As you're aware, there are four tags (max) for every article on DEV.

Suppose you want to remove some articles with the tag #discuss but want to include the post if that article with the #discuss tag also has a #programming tag. So, you can include #discuss in exlcudeTags & #programming in mustIncludeTags.
In case you feel confused. Let's understand it with an example.

Suppose we have an article with tags: ['react', 'javascript', 'frontend', 'tutorial'].

If excludeTags is 'frontend' and mustIncludeTags is 'javascript'. The article is included because it has the javascript tag (even though it also has the frontend tag).
If excludeTags is 'tutorial' and mustIncludeTags is empty (default), the article will be excluded because it has the tutorial tag.
If excludeTags is 'backend' and mustIncludeTags is 'typescript'. The article is included because it does not have the backend tag.
These cases will work for multiple tags, and mustIncludeTags will only work if excludeTags is provided.
 

Below these are already configured and you don't need these in case you're not favorable to Git & GitHub.

conventionalCommits

There are conventions for commit messages that make commits self-explanatory regarding their type. If conventionalCommits is set to true (default) then those conventions will be used.

branch

Branches will allow you to do those above processes in a contained area of your repository. You can change it using branch whose default value is main.

Drawback
I will solve these by next week (upcoming release).

The articles are not updated in the repository even if you update them on DEV.
The reading list included in the repository won't be removed even if you remove it from your DEV.
I've noticed that only 100 reading lists are saved.
I haven't done this for organizations and series. I would need more specific data and API responses for it.
I've introduced a starting release so that people can use it.
Plus, I promised to post it on Wednesday :D

I can't break the promise. LOL!

premier

I would appreciate it if you could star the repository 😄

GitHub: github.com/Anmol-Baranwal/DevtoGitHub
Marketplace: github.com/marketplace/actions/devtogithub

If I get 300 stars on the repository in 1 month, I will create something more special for the DEV community so that you can showcase what you have achieved with DEV with some insane level of stats. Trust me!

By the way, I'm officially accepted to be a writer at freeCodeCamp.

acceptance letter of freecodecamp

So, I will write a couple of posts there which I was planning on DEV. I will repost it here. I hope you all don't mind it :)
I will create some original posts for DEV too.

I create solutions with open source.
So you can follow me on GitHub & Twitter to remain updated on my work :)`
}