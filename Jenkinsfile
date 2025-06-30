pipeline{
    agent any
    // escenarios -> escenario -> pasos
    environment{
        NPM_CONFIG_CACHE= "${WORKSPACE}/.npm"
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

    }
    stage ("build y push de imagen docker"){
        steps {
            sh "docker build -t backend-nest-nlj ."
        }
    }
}