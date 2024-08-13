pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/jaydeep123s/DEVOPS-WEB-APP.git', credentialsId: 'github-pat'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install dependencies (assuming it's a Node.js app)
                sh 'npm install'
            }
        }
        // You can add more stages here...
    }
}
