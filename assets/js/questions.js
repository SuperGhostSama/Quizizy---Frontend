//create the quiz questions
let questions = [
    {
      question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
      choiceA: "Amazon EC2 costs are billed on a monthly basis",
      choiceB: "Users retain full administrative access to their Amazon EC2 instances.",
      choiceC: "Amazon EC2 instances can be launched on demand when needed",
      choiceD: "Users can permanently run enough instances to handle peak workloads.",
      correct: "C",
      answer: "The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load",
    },
    {
      question: "Which AWS service would simplify the migration of a database to AWS?",
      choiceA: "AWS Storage Gateway",
      choiceB: "AWS Database Migration Service (AWS DMS)",
      choiceC: "Amazon EC2",
      choiceD: "Amazon AppStream 2.0",
      correct: "B",
      answer: "AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.",
    },
    {
      question: " Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
      choiceA: "AWS Config",
      choiceB: "AWS OpsWorks",
      choiceC: "AWS SDK",
      choiceD: "AWS Marketplace",
      correct: "D",
      answer: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.",
    },
    {
      question:"Which AWS networking service enables a company to create a virtual network within AWS?",
      choiceA: "AWS Config",
      choiceB: "Amazon Route 53",
      choiceC: "AWS Direct Connect",
      choiceD: "Amazon Virtual Private Cloud (Amazon VPC)",
      correct: "D",
      answer: "Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.",
    },
    {
      question: "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
      choiceA: "Configuring third-party applications",
      choiceB: "Maintaining physical hardware",
      choiceC: "Securing application access and data",
      choiceD: "Managing guest operating systems",
      correct: "B",
      answer: "Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.",
    },
    {
      question: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
      choiceA: "AWS Regions",
      choiceB: "Edge locations",
      choiceC: "Availability Zones",
      choiceD: "Virtual Private Cloud (VPC)",
      correct: "B",
      answer: "To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide.",
    },
    {
      question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
      choiceA: "Use Amazon Cloud Directory",
      choiceB: "Audit AWS Identity and Access Management (IAM) roles",
      choiceC: "Enable multi-factor authentication",
      choiceD: "Enable AWS CloudTrail",
      correct: "C",
      answer: "Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor???what they know), as well as for an authentication code from their MFA device (the second factor???what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources",
    },
    {
      question: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
      choiceA: "AWS Trusted Advisor",
      choiceB: "AWS CloudTrail",
      choiceC: "AWS X-Ray",
      choiceD: "AWS Identity and Access Management (AWS IAM)",
      correct: "B",
      answer: "AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.",
    },
    {
      question: "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
      choiceA: "Amazon Simple Notification Service (Amazon SNS)",
      choiceB: "AWS CloudTrail",
      choiceC: "AWS Trusted Advisor",
      choiceD: "Amazon Route 53",
      correct: "A",
      answer: "Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.",
    },
    {
      question: "Where can a user find information about prohibited actions on the AWS infrastructure?",
      choiceA: "AWS Trusted Advisor",
      choiceB: "AWS Identity and Access Management (IAM)",
      choiceC: "AWS Billing Console",
      choiceD: "AWS Acceptable Use Policy",
      correct: "D",
      answer: "The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure.",
    },
];
//Making a copy of the array and shuffling it
const questionsCopy = questions.slice();
shuffle(questionsCopy);//randomising the array

console.log(questionsCopy);

//////////////
