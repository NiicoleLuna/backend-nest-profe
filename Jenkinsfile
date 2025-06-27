pipeline{
    agent any

    stages{
        stage("saludo a usuario"){ 
            steps{
                sh 'echo "Comenzando mi pipeline"'
            }
        }
        stage("salida de los usuarios a usuario"){ 
            steps{
                sh 'echo "Saliendo de este grupo de escenarios"'
            }
        }
        stage("Proceso de build y test"){ 
            agent{
                docker{
                    image 'node:22'
                    reuseNode true
                }
            }
            stages{
                stage("Instalación de dependencias"){
                    steps{
                        sh 'npm ci'
                    }
                }
            }
        }
    }
}