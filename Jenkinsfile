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
        stage("Salida de los usuarios a usuario"){ 
            steps{
                sh 'echo "Saliendo de este grupo de escenarios"'
            }
        }
        stage ("proceso de build y test") {
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
        stage ("build y push de imagen docker"){
            steps {
                docker.withRegistry("${registry}", registryCredentials ){
                    sh "docker build -t backend-nest-nlj ."
                    sh "docker tag backend-nest-nlj ${dockerImagePrefix}/backend-nest-nlj"
                    sh "docker push ${dockerImagePrefix}/backend-nest-nlj"
                }
            }
        }
    }
}