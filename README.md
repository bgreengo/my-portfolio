# Serverless Portfolio

https://portfolio.greengotech.net


![arch-diagram](https://user-images.githubusercontent.com/23042063/42655811-13cb5c50-85d2-11e8-925a-76992db13348.png)

Estimated cost: $1/month for Route 53 hosted zone.

Github repo for source control of code.

Cloned for local development and testing.

Setup S3 web bucket with static web hosting enabled. Created DNS record with custom domain in Route 53 to point to S3 web endpoint.

Deployed CloudFront CDN, redirected to HTTPS and assigned an SSL cert from ACM. Used S3 web bucket as origin.
	
CodeBuild connected to Github repo and stores builds in separate S3 build buckets. Zips up application after unit testing with Jest and packages code using NPM, webpack and Babel.

Codepipeline triggers a Lambda function from CodeBuild to extract/upload from S3 build bucket into S3 web bucket.

Lambda also triggers SNS topic to send notification if deployment is successful or fails.

Front end interactivity with Javascript(React).

Cross-browser compatibility with Babel.

Bundling and asset management with Webpack.

Package management with NPM.

Testing with Jest (or Chai and Mocha).
