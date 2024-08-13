pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'devops', url: 'git@github.com:jaydeep123s/DEVOPS-WEB-APP.git', credentialsId: 'github-ssh-key'
            }
        }
        // other stages
    }
}

         
