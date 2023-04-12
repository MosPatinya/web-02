pipeline {
    agent any

    environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t  patinya14/react-0.1 .'
            }
        }
        stage('Login') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Push') {
            steps {
                sh 'docker push patinya14/react-0.1'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}
