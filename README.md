This project is part of the tutorial to add pipeline resolvers to AWS amplify.

You can find the complete tutorial [here](https://dev.to/dagasatvik10/add-pipeline-resolvers-in-aws-amplify-43ae)

## Prerequisites

To complete this tutorial, you will need:

- Node.js(>=10.x) and NPM(>=6.x) installed. Download from [here](https://nodejs.org/en/download/).
- An AWS account. If you don't have one, you can create [here](https://portal.aws.amazon.com/billing/signup?nc2=h_ct&src=default&redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start).
- [Amplify CLI installed and configured](https://docs.amplify.aws/cli/start/install).

## Getting Started

- Clone this repository
- Initialize a new AWS backend
  ```sh
  $ amplify init
  ```
- Each commit corresponds to a complete step in the tutorial.
  - Checkout the commits corresponding to each step by-
    ```sh
    $ git log --pretty=oneline
    ```
    ![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/r05347d3sg1imqeltmw5.png)
  - Replace commitId with the corresponding commitId for a step and then run checkout.
    ```sh
    $ git checkout <commitId>
    ```
- Run the following if you want to deploy the code
  ```sh
  $ amplify push
  ```

## Built With

- AWS Amplify
- React
