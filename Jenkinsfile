pipeline{
    agent any
    // escenarios -> escenario -> pasos
    environment{
        NPM_CONFIG_CACHE= "${WORKSPACE}/.npm"
        dockerImagePrefix = "us-west1-docker.pkg.dev/lab-agibiz/docker-repository"
        registry = "https://us-west1-docker.pkg.dev"
        registryCredentials = "gcp-registry"
    }

    stages{
        stage("Saludo a usuario"){ 
            steps{
                sh 'echo "Comenzando mi pipeline"'
            }
        }
        stage("Salida de los saludos a usuario"){ 
            steps{
                sh 'echo "Saliendo de este grupo de escenarios"'
            }
        }
        stage ("Proceso de build y test") {
            agent {
                docker {
                    image 'node:22'
                    reuseNode true
                }
            }
            stages {
                stage("instalacion de dependencias"){
                    steps {
                        sh 'npm ci'
                    }
                }
                stage("ejecucion de pruebas"){
                    steps {
                        sh 'npm run test:cov'
                    }
                }
                stage("construccion de la aplicacion"){
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
        stage ("Build y push de imagen docker"){
            steps {
                script {
                    docker.withRegistry("${registry}", registryCredentials ){
                        sh "docker build -t backend-nest-nlj ."
                        sh "docker tag backend-nest-nlj ${dockerImagePrefix}/backend-nest-nlj"
                        sh "docker tag backend-nest-nlj ${dockerImagePrefix}/backend-nest-nlj:${BUILD_NUMBER}"
                        sh "docker push ${dockerImagePrefix}/backend-nest-nlj"
                        sh "docker push ${dockerImagePrefix}/backend-nest-nlj:${BUILD_NUMBER}"
                    }
                }
            }
        }
        stage ("Actualización de Kubernetes"){
            agent{
                docker{
                    image 'alpine/k8s:1.30.2'
                    reuseNode true
                }
            }
            steps{
                withKubeConfig([credentialsId: 'gcp-kubeconfig']){
                    sh "kubectl -n lab-nlj set image deployments/backend-nest-nlj backend-nest-nlj=${dockerImagePrefix}/backend-nest-nlj"
                }
            }
        }
    }
}