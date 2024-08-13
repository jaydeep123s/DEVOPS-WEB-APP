pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                script {
                    echo 'Building the application...'
                    sh 'pip install -r requirements.txt'
                }
            }
        }
        stage('Test') { 
            steps {
                script {
                    echo 'Running tests...'
                    sh 'python -m unittest discover -s tests'
                }
            }
        }
        stage('Deploy') { 
            steps {
                script {
                    echo 'Deploying the application...'
                    sh '''
                    ssh -i /path/to/your/key.pem ubuntu@your-ec2-public-ip << EOF
                        cd /path/to/your/app
                        git pull origin main
                        pip install -r requirements.txt
                        sudo systemctl restart your-app-service
                    EOF
                    '''
                }
            }
        }
    }
}
