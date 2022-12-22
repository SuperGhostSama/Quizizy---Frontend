//create the quiz questions
let questions = [
    {
      question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
      choiceA: "Amazon EC2 costs are billed on a monthly basis",
      choiceB: "Users retain full administrative access to their Amazon EC2 instances.",
      choiceC: "Amazon EC2 instances can be launched on demand when needed",
      choiceD: "Users can permanently run enough instances to handle peak workloads.",
      correct: "C",
    },
    {
      question: "Which AWS service would simplify the migration of a database to AWS?",
      choiceA: "AWS Storage Gateway",
      choiceB: "AWS Database Migration Service (AWS DMS)",
      choiceC: "Amazon EC2",
      choiceD: "Amazon AppStream 2.0",
      correct: "B",
    },
    {
      question: " Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
      choiceA: "AWS Config",
      choiceB: "AWS OpsWorks",
      choiceC: "AWS SDK",
      choiceD: "AWS Marketplace",
      correct: "D",
    },
    {
      question:"Which AWS networking service enables a company to create a virtual network within AWS?",
      choiceA: "AWS Config",
      choiceB: "Amazon Route 53",
      choiceC: "AWS Direct Connect",
      choiceD: "Amazon Virtual Private Cloud (Amazon VPC)",
      correct: "D",
    },
    {
      question: "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
      choiceA: "Configuring third-party applications",
      choiceB: "Maintaining physical hardware",
      choiceC: "Securing application access and data",
      choiceD: "Managing guest operating systems",
      correct: "B",
    },
    {
      question: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
      choiceA: "AWS Regions",
      choiceB: "Edge locations",
      choiceC: "Availability Zones",
      choiceD: "Virtual Private Cloud (VPC)",
      correct: "B",
    },
    {
      question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
      choiceA: "Use Amazon Cloud Directory",
      choiceB: "Audit AWS Identity and Access Management (IAM) roles",
      choiceC: "Enable multi-factor authentication",
      choiceD: "Enable AWS CloudTrail",
      correct: "C",
    },
    {
      question: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
      choiceA: "AWS Trusted Advisor",
      choiceB: "AWS CloudTrail",
      choiceC: "AWS X-Ray",
      choiceD: "AWS Identity and Access Management (AWS IAM)",
      correct: "B",
    },
    {
      question: "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
      choiceA: "Amazon Simple Notification Service (Amazon SNS)",
      choiceB: "AWS CloudTrail",
      choiceC: "AWS Trusted Advisor",
      choiceD: "Amazon Route 53",
      correct: "A",
    },
    {
      question: "Where can a user find information about prohibited actions on the AWS infrastructure?",
      choiceA: "AWS Trusted Advisor",
      choiceB: "AWS Identity and Access Management (IAM)",
      choiceC: "AWS Billing Console",
      choiceD: "AWS Acceptable Use Policy",
      correct: "D",
    },
];
//Making a copy of the array and shuffling it
const questionsCopy = questions.slice();
shuffle(questionsCopy);//randomising the array

console.log(questionsCopy);

//////////////
