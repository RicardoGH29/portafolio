pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                // Clonar la rama del repositorio
                git branch: 'master', url: 'https://github.com/RicardoGH29/portafolio.git'
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                // Construir la imagen Docker usando el Dockerfile
                script {
                    // Asegúrate de que el nombre de la imagen sea único
                    def imageName = "portafolioricardo:latest"
                    sh "docker build -t ${imageName} ."
                }
            }
        }

        stage('Actualizar Contenedor') {
            steps {
                script {
                    // Detener y eliminar el contenedor existente, si está en ejecución
                    def containerName = "portafolioricardo"
                    sh """
                        if [ \$(docker ps -q -f name=${containerName}) ]; then
                            docker stop ${containerName}
                            docker rm ${containerName}
                        fi
                    """
                    // Ejecutar el nuevo contenedor
                    sh "docker run -d --name ${containerName} portafolioricardo:latest"
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completado con éxito.'
        }
        failure {
            echo 'Pipeline fallido.'
        }
    }
}
