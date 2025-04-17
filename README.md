# What the Health Navigator

[[_TOC_]]



## Project Description 
The What the Health navigator is an interactive web-based application designed to explore how large language models (LLMs) make decisions in medical contexts.

This project focuses on generating explainable and user-friendly diagnostic predictions based on patient symptoms.

Users can iteratively modify inputs to observe how these changes affect the model's predictions, allowing them to better understand the LLM's decision-making process and local decision boundaries.

### Users
This tool is designed for 
* **Novice Users:** Individuals with minimal technical expretise, such as patients, caregivers or general practitoners, who want to understand AI-powered medical recommendations.
* **Researchers:** Those strudying the behavior of LLMs in sensitive domains like healthcare. 

### Tasks
* **Syptom-Based Diagnosis:** Users can select symptoms to receive a ranked list of probable diagnoses. 
* **Interactive Feedback:** The interface dynamically updates predictions when sympotms are added or removed, enabling users to explore "what-if" scenarios. 
* **Visualization** The tool provides graphs which show the 5 most probable disease according to the selected symptoms and their probabilities in a bar chart.



## Requirements
To successfully run this project, ensure the following prerequisites are met:

1. API Key:
  * Obtain an API key from your preferred LLM provider, such as:
    - [NVIDIA](https://build.nvidia.com/explore/discover)
    - OpenAI
  * Create a .env file in the root directory of the project and add the API key in the following format:
  ```API_KEY=your_api_key_here```
2. Node.js and npm
3. dotenv package


<!--Write here all intructions to build the environment and run your code.\
**NOTE:** If we cannot run your code following these requirements we will not be able to evaluate it.-->

## How to Run
<!--Write here **DETAILED** intructions on how to run your code.\
**NOTE:** If we cannot run your code following these instructions we will not be able to evaluate it.-->
### Step 1: Clone the repository 
1. Open a terminal and clone the project repository
2. Navigate to the project directory ```cd your-repository ```

### Step 2: Configure the environment 
1. Create a ```.env``` file in the project’s root folder and add the relevant API key(s)
  - Run the following command to create a new .env file in the current directory ```touch .env```
  - Add the API key(s) to the .env file:
  ```API_KEY=your_api_key_here```
  - Install dotenv package ```npm install dotenv```

### Step 3: Install and Run Project
1. Install the required dependencies using npm: ```npm install```
2. Build the project using Vite: ```npx vite build```
3. Start the frontend server: ```npm start```
4. If all steps have been executed successfully, the website can be reached on http://localhost:5173

**Important Notes** 
* Ensure the .env file is properly configured with the correct API keys for the LLM(s) you want to use.
* Check for provider-specific rate limits or usage restrictions when interacting with their APIs.




