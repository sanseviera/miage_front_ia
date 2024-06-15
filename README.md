Projet Big Data :
=================

## Table des Matières

1. [Introduction](#introduction)
2. [Utiles](#utiles)
3. [Technologies Utilisées](#technologies-utilisées)
4. [Installation](#installation)
5. [Contributeurs](#contributeurs)
5. [Contacts](#contacts)
5. [Ressources](#ressources)

## Introduction
MiageGPT & Analyseur sont des projets innovants développés dans le cadre du programme M1 MIAGE 2023-2024. Réalisé par les étudiants DIOP Serigne Rawane et BORREANI Théo, ces projets visent à créer un assistant conversationnel avancé, similaire à ChatGPT, mais avec des fonctionnalités supplémentaires qui étendent ses capacités, développé avec **node.js**. De l'autre côté un analyseur de diagnostic comptable utilisant l'API OpenAI pour détecter les anomalies dans les écritures comptables, analyser les états financiers et donner une expertise comptable, développé avec Python Flask et permet d'entrer les données soit par saisie directe, soit en téléchargeant des fichiers de différents formats (CSV, JSON).Les applications utilises l'API de chat d'OpenAI et le moteur GPT-3.5-turbo pour offrir une expérience de chat enrichie. L'application Flash a une spécificité telle que la création de notre propre modele fine-tuning qui a été entrainé à partir des données du cours de M ANIGO en équilibre financier et des informations complémentaires.

### Contexte et Objectifs

Le contexte de ce projet repose sur la nécessité d'améliorer et d'étendre les fonctionnalités des assistants conversationnels existants. MiageGPT se distingue par sa capacité à gérer des interactions complexes et à intégrer des commandes spéciales pour des tâches spécifiques. L'application vise à offrir une gestion de chat classique avec historique, mais aussi à permettre des interactions plus riches et diversifiées grâce à des commandes spéciales.

D'autre part, nous avons le souhait de mettre en place plus tard un stat-up utilisant les nouvelles technologies plus particulièrement l'IA dans la comptabilité, la gestion et la finance.


Ce projet a pour objectifs :

1. **Gestion de chat classique** : Développer une application de chat capable de gérer les conversations et l'historique des discussions, similaire à ChatGPT, en utilisant l'API de chat d'OpenAI et le moteur GPT-3.5-turbo.
2. **Gestion de chat amélioré ou avancé** : Développer une application de chat capable de répondre à des questions spécifiques et parfois exclusivement sur l'équilibre financier, en utilisant l'API de chat d'OpenAI et notre propre moteur fine-tuning créé.
3. **Commandes spéciales** : Permettre aux utilisateurs d'entrer des commandes spéciales pour des tâches spécifiques, telles que :
    * /image : Générer des images avec DALL-E.
    * /speech : Fournir des réponses vocalisées.
    * /stable-diffusion : Utiliser les services de stable-diffusion pour la génération d'images.
4. **Affinage des résultats de génération d'images** : Offrir des options pour affiner les résultats des images générées. Cela inclut la lecture de la documentation de l'API de DALL-E, l'exploration de l'interface graphique interactive d'OpenAI pour DALL-E, et l'observation des méthodes utilisées par le Discord de MidJourney pour affiner les résultats.
5. **Interface graphique améliorée** : Développer des éléments de GUI (menus, boutons) qui apparaissent automatiquement lorsque le prompt concerne des images, afin d'aider à la génération de prompts plus précis. 
6. **Développement d'un assistant touristique** : Créer un assistant capable de fournir des informations sur la MIAGE ou sur une visite touristique à Sophia-Antipolis, en utilisant les capacités de l'IA pour fournir des réponses enrichies et adaptées aux besoins des utilisateurs. 


## Utiles
Au lieu de suivre les installation et lancer notre projet en local, nous vous proposons plus simplement d'aller consulter nos différents services déjà déployés.

Voici les liens utiles :

* front déployé : https://borreani.fr/miage_front_ia/

* Back du serveur node.js déployé sur render : https://backend-projet-ia-m1miage-2023-2024.onrender.com

* Back du serveur Python Flask déployé sur render : https://ia-diagnostic-comptable.onrender.com

Liens Git :

* front : https://github.com/sanseviera/miage_front_ia.git

* Back du serveur node.js : https://github.com/dioprawane/backend_projet_ia_M1MIAGE_2023_2024.git

* Back du serveur Python Flask : https://github.com/dioprawane/ia_diagnostic_comptable.git


## Technologies Utilisées

### Environnement

- Java Script
- Python

### Dépendances

- bt_composant

## Installation :
Pour utiliser ce projet, vous aurez besoin de :

1. **Clonez ou téléchargez les projets à partir de GitHub.**
   ```
   git clone https://github.com/sanseviera/miage_front_ia.git

   git clone https://github.com/dioprawane/backend_projet_ia_M1MIAGE_2023_2024.git

   git clone https://github.com/dioprawane/ia_diagnostic_comptable.git
   ```

2. **Installez les dépendances Node.js** en exécutant la commande suivante à la racine du projet **backend_projet_ia_M1MIAGE_2023_2024** puis dans le dossier **server** du projet
   ```
   npm install
   ```

3. **Insatallez les dépendances sur Python** d'abord créer un environnement virtuel et activez-le et ensuite installez.
   ```
   python -m venv venv
   source venv/bin/activate  # Sur Windows : venv\Scripts\activate
   ```
   ```
   pip install -r requirements.txt
   ```

5. **Exécution du projet**

    a. **Démarrez le serveur Node.js** en exécutant la commande suivante dans le dossier `serveur` du projet `backend_projet_ia_M1MIAGE_2023_2024`:

   ```
   cd serveur
   node server.js
   ```

    b. **Lancer l'application Flask** en allant dans le projet `ia_diagnostic_comptable` et lancez :
   ```
    python app.py
   ```

    c. **Démarrer le front et Accédez à l'application** - Allez dans le projet `miage_front_ia` et ouvrir live server ou lancer le fichier `index.html`. Ouvrez votre navigateur et naviguez vers `http://localhost:4200` pour voir l'application fonctionner.

-------------------------------------------------------------------------------------------

## Contributeurs

- M. DIOP Serigne Rawane
- M. BORREANI Théo

## Contacts

Si vous avez besoin d'aide ou si vous avez des questions, veuillez nous contacter à notre adresse électronique :

- serigne-rawane.diop@etu.unice.fr
- borreani.theo@etu.unice.fr

## Ressources :
- https://platform.openai.com/docs/guides/fine-tuning/create-a-fine-tuned-model
- https://cookbook.openai.com/examples/how_to_finetune_chat_models#check-job-status
- https://cookbook.openai.com/
- https://cookbook.openai.com/examples/question_answering_using_embeddings
- https://platform.openai.com/docs/assistants/how-it-works
- https://render.com/
- Python  
