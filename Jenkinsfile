pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/jaydeep123s/DEVOPS-WEB-APP.git', credentialsId: 'github-pat'
            }
        }
        stage('Print Environment') {
            steps {
                sh 'echo $PATH'
                sh 'which npm'
                sh 'npm -v'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Replace with the correct script name if needed
                sh 'npm run start'  // Or use another appropriate script
            }
        }
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Replace with your deployment command
                sh 'scp -i /path/to/your/private-key -r build/ user@your-server:/path/to/deploy'
            }
        }
    }
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
