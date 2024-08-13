pipeline {
    agent any

    environment {
        DEPLOYMENT_IP = "54.69.190.62"  // Replace with your actual EC2 instance IP
        DEPLOYMENT_USER = "ubuntu"      // Your EC2 user, which is 'ubuntu' in this case
        DEPLOYMENT_KEY = credentials('my-ssh-deploy-key')  // The ID of your SSH private key
    }

    stages {
        stage('Pull Code') {
            steps {
                // Clone the Git repository
                git 'https://github.com/yourusername/your-repo-name.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the application (if applicable)
                echo 'Building application...'
            }
        }

        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }

        stage('Deploy') {
            when {
                // Only deploy if tests pass
                expression { currentBuild.result == 'SUCCESS' }
            }
            steps {
                // Deploy to EC2 instance
                sh '''
                    scp -i ${DEPLOYMENT_KEY} -o StrictHostKeyChecking=no -r . ${DEPLOYMENT_USER}@${DEPLOYMENT_IP}:/path/to/deployment/
                    ssh -i ${DEPLOYMENT_KEY} -o StrictHostKeyChecking=no ${DEPLOYMENT_USER}@${DEPLOYMENT_IP} "cd /path/to/deployment && npm install && pm2 restart all"
                '''
            }
        }
    }

    post {
        success {
            echo 'Build, test, and deployment successful!'
        }
        failure {
            echo 'Build, test, or deployment failed.'
        }
    }
}
