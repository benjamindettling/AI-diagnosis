# What the Health Navigator

[[_TOC_]]

## Team Members
1. Benjamin Dettling
2. Alara Egi
3. Zhijing Liu
4. Elif Özsoy

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



<!--As an example here are the instructions to run the Dummy Project:
To run the Dummy project you have to:
- clone the repository;
- open a terminal instance and using the command ```cd``` move to the folder where the project has been downloaded;

To run the backend
- open the backend folder called "backend-project"
- to start the backend first you need to create a virtual environment using conda
    ```conda create -n nameOfTheEnvironment```
  - to activate the virtual environment run the command ```conda activate nameOfTheEnvironment```
  - install the requirements using the command ```pip3 install .```
  - If you want to make changes and test them in real time, you can install the package in editable mode using the command```pip install -e .```
  - to start the backend use the command ```python3 -m gamut_server.router.app``` or use the ```start-server``` command directly on your terminal

To run the frontend
- Open a new terminal window and go to the project folder
- Enter the frontend folder called "react-frontend"
- Do the following command to start the front end ```npm install```, ```npm start```
If all the steps have been successfully executed a new browser window witht he dummy project loaded will open automatically.-->

## Milestones
Document here the major milestones of your code and future planned steps.
- [x] Week 1
  - [x] Pitch Meeting

- [x] Week 2
  - [x] Integrate GPT API with Backend
  - [x] Display GPT Responses on the Frontend
  - [x] Modify GPT Query for Probability Output
  - [x] Communication between the frontend and backend for dynamic GPT responses.
  - [x] Visualization of the output with bar chart 

- [x] Week 3
  - [x] Add new input fields for user details
  - [x] Update LLM prompt
  - [x] Enhance bar chart visualization
  - [x] Adjust the color scheme to fulfill the AA contrast criterion
  - [x] Meeting for Milestone 2
  - [ ] Simplify chart labels

- [x] Week 4
  - [x] Provenance tracking improvements
  - [x] History overview summary 
  - [x] Brief user feedback sessions with friends
  - [x] Team meeting on Friday 
  - [x] [Poster](https://gitlab.inf.ethz.ch/course-fwe2024/students/final-project/fp-p18/-/blob/main/Poster.pdf?ref_type=heads) Preparation

  
<!---Create a list subtask.\
Open an issue for each subtask. Once you create a subtask, link the corresponding issue.\
Create a merge request (with corresponding branch) from each issue.\
Finally accept the merge request once issue is resolved. Once you complete a task, link the corresponding merge commit.\
Take a look at [Issues and Branches](https://www.youtube.com/watch?v=DSuSBuVYpys) for more details. 

This will help you have a clearer overview of what you are currently doing, track your progress and organise your work among yourselves. Moreover it gives us more insights on your progress. --> 

## Weekly Summary 
**1.Week (18.11-24.11)**
* **Progress**  
  - **Project Understanding:** We spent the week familiarizing ourselves with the project goals, focusing on understanding how a Large Language Model (LLM) could be applied to generate disease diagnoses based on patient symptoms and demographics.
  - **Pitch Presentation:** We worked on preparing for the pitch presentation by outlining the core components of the project, including key features such as symptom-based diagnosis, visual representation of outcome and interactive feedback.
  - **Supervisor Meeting:** On Friday, we met with our supervisor Robin to present our pitch. This meeting was crucial for aligning on the project's direction and receiving feedback on our approach.

* **Challenge**
  - **Model Integration:** We struggled with deciding on the best model integration for disease diagnosis. Specifically, we were uncertain about whether to use a pre-trained LLM (like GPT-3) or a custom-trained model tailored for medical predictions. The challenge lies in the fact that medical predictions require high accuracy, and it’s unclear whether a generic model like GPT-3 would suffice or if we need to fine-tune it with specific medical data.
  - **Writing Effective Prompts:**  Crafting the right prompts to generate meaningful and actionable outputs from GPT-3 or any LLM was another challenge. We are unsure how to phrase prompts in a way that would allow us to represent GPT's answers clearly in a bar chart or graph format.
  - **Visualizing the Results:** We explored different ways to visualize the diagnostic results. One idea that emerged was to use two bar charts side by side: one showing predictions with a selected symptom and the other with that symptom deselected, allowing users to easily compare the impact of different symptoms on the diagnosis.

* **Open Questions:**
  * Should we use pre-trained LLMs (e.g., GPT-3) or custom-trained models for disease diagnosis, and what is the best approach for fine-tuning these models to improve accuracy for medical predictions?
  * How can we structure the prompts to ensure that GPT-3 outputs actionable results (such as a list of diseases with probabilities), which can then be visualized effectively in a bar chart?
  * What is the most user-friendly interface design to allow users to easily select symptoms and visualize the impact of each symptom on the diagnosis? Should we stick to the idea of using two bar charts for comparison, or explore other visualization methods?
- - -

**2.Week (25.11-1.12)**
* **Progress** 
  - **Tabular Input and Search Bar:** Implemented a system where users can select symptoms from a searchable list. Selected symptoms are displayed as chips, which users can easily deselect. This made the input process more intuitive and interactive.
  - **Displaying Diagnosis Results:**  Upon submitting the symptoms, GPT provides the five most probable diseases along with their associated probabilities. This output is visualized using Chart.js in a bar chart format.
  - **History Feature:** Introduced a history mechanism using localStorage to save and retrieve previous diagnostic results. Users can compare current results (with selected symptoms) against previous results (with prior symptoms) in the same bar chart, displaying the same diseases side-by-side for easy comparison.
  - **Interactive Comparisons:** The side-by-side bar chart visualization allows users to see how adding or removing symptoms impacts the model’s predictions, helping them understand the influence of specific symptoms on diagnosis.
  - **Bug Fixes:**
    - Resolved a page reload issue where the graph would momentarily display and then disappear    upon submission. This issue took significant effort to debug and fix.
    - Worked on reducing delays caused by LLM response time and postprocessing, though this remains an area for further improvement

* **Challenges**
  - **API Key Security:** The API key for the LLM was embedded directly in the code, raising concerns about potential security vulnerabilities. We need to address how to securely manage API keys.
  - **Response Delays:** Since the LLM’s response is processed and visualized, the time taken to display the results can be longer than ideal, impacting the user experience.
  - **Counterfactual Examples:** Identifying counterfactual examples—symptoms that have minimal or no influence on the model's decisions—proved to be challenging. These examples are essential for showcasing the model's decision boundaries and explainability.
  - **Bar Chart Content:** Debated whether the bar chart should show:
      - Only common diseases (intersection) between current and previous outputs.
      - All diseases (union) from both current and previous outputs. Each approach has trade-offs in terms of clarity and comprehensiveness.

* **Open Questions**
  - What kind of counterfactual examples can we find to showcase the model's decision?
  - Which colors to use in the website to ensure accessibility and improve the user experience? 
  - How can we use color schemes effectively in bar charts and other components to convey information clearly without overwhelming users?
- - -

**3.Week (2.12-8.12)**
* **Progress**
  - **Integration of Additional User Inputs:**
    - Added fields for age, gender, and race in the user input form.
    - Updated the LLM prompt to include these inputs, ensuring that decisions are now influenced by age, gender, race and symptoms.
  
  - **Updated Bar Chart Visualization:**
    - Enhanced the bar chart to reflect all inputs (symptoms, age, gender, and race).
    - Overcame issues with bar colors by dynamically assigning random colors to each new submission. This eliminated confusion and ensured that submissions are easily distinguishable.
  
  - **Accessibility Improvements:**
    - Modified the website's color scheme to meet the AA contrast criterion. This ensures the site is accessible to users with visual impairments or those viewing it in less-than-ideal lighting conditions.

  - **Chart Label Simplification:**
    - Identified that including all inputs (age, gender, race, and symptoms) in the chart labels created clutter.
    - Proposed and began implementing a feature to only display differing inputs (compared to the first submission) in the chart labels. This simplifies comparison and enhances readability.

* **Challenges**
  - **Bar Chart Update for Additional Inputs:**
    - Adjusting the bar chart to accommodate new input fields (age, gender, and race) while maintaining clarity and functionality.
    - Successfully addressed this by treating these new inputs similarly to selected symptoms and displaying them accordingly.
  
  - **Confusion from Reused Bar Colors:**
    - Encountered issues where subsequent submissions displayed bars in the same colors, causing confusion.
    - Resolved by implementing a system to assign unique random colors to each submission dynamically.

  - **Simplification of Chart Labels:**
    - Realized the need to highlight only the differing inputs across submissions in the bar chart labels.
    - Proposed a solution and began implementation, but further refinement is needed.

* **Open Questions** 
  - What is the most effective way to display history in a way that balances aesthetics and usability for provenance tracking?
  - How can we ensure that the differences in inputs (age, gender, race, symptoms) are highlighted in a concise yet informative manner in the chart labels?
 
* **Next Steps** 
  - Finalize the implementation of simplified chart labels that emphasize differences between submissions.
  - Find a visually appealing and user-friendly design for provenance tracking, ensuring users can easily understand and trace how their inputs evolved over time. 
- - -

**4.Week (9.12-15.12)**

This week, we focused on refining the provenance tracking feature and improving clarity in the user experience.
  * **Progress**
    - **Provenance Tracking Improvement**
      - Instead of highlighting differing inputs in the bar chart labels, we implemented a table-based approach to display previous submissions.
      - Users can now view their submission history in a table format, where each input field (symptoms, age, gender, race) is clearly displayed.
      - Users can select specific submissions to revisit or compare.
      - When comparing multiple submissions, the input fields that differ are highlighted to draw attention to the differences.
      - “Show” button allows users to visualize selected submissions in a bar chart, displaying the output probabilities for comparison.
    
    - **History Overview Summary**
      To provide a quick recap of the submission data, we display key metrics:
        - Total number of submissions
        - Disease with the maximum probability so far
        - Number of unique diseases predicted across the submissions 
    
    - **Addressing User Confusion**
      - Based on user feedback, we found that users were sometimes confused about whether the website was a diagnostic tool.
      - To address this, we added a footer with the disclaimer:
      “This tool is for demonstrating AI capabilities and exploring predictions. It is not designed for clinical use or medical decision-making.”

    - **Poster Preparation**

      The poster was completed, printed, and ready for presentation.
      You can find it [here](https://gitlab.inf.ethz.ch/course-fwe2024/students/final-project/fp-p18/-/blob/main/Poster.pdf?ref_type=heads)
  
  * **Challenges and Open Questions** 
  The primary open questions revolve around the final documentation tasks, including:
    - Writing the study report 
    - Focus on presentation preparation to effectively communicate our project 
  
  At the end of the Week 4, the website is nearly complete, with all major functionalities implemented and refined. 

## Contribution Statement
We aimed to fairly share tasks each week to ensure balanced participation in the project. Below is the contribution breakdown for each group member:

* **Alara Egi** 
  - Focused on improving the frontend design to ensure the website is visually appealing (color scheme, fonts, and general appearance).
  - Assisted Zhijing with enhancing the bar chart, ensuring that each submission’s bars are displayed in distinct colors. 
  - Improved the input fields for usability and added icons to enhance visual appeal.
  - Added the footer disclaimer to clarify the website's purpose and address user confusion.
  - Wrote the study report and ensured proper documentation.
  - Attended all team meetings and milestone discussions with the supervisor.

* **Zhijing Liu**
  - Primarily focused on the backend setup and integration.
  - Set up the development environment and implemented the API to connect with the LLM.
  - Contributed to the frontend by working on the display of disease probabilities and implementing the bar chart visualizations.
  - Brought and implemented the idea of a search bar connected to the LLM, enabling real-time symptom suggestions via a dropdown list as the user types.
  - Optimized the response handling from the LLM to ensure smooth and efficient interaction between the backend and frontend components.
  - Attended all team meetings and milestone discussions with the supervisor.

* **Elif Özsoy**
  - Focused on the frontend layout and general page structure.
  - Added and managed new input fields such as gender, age, and ethnicity. Integrated these inputs into the LLM query in the backend.
  - Led the implementation of provenance tracking to display previous submissions: 
    - table to display all previous submissions, with the ability to select submissions
    - highlighting feature to emphasize differing input fields across selected submissions
  - Wrote the README file for the project.
  - Attended all team meetings and milestone discussions with the supervisor.

All three members collaborated on the poster design, completing it together as a team. 

## Versioning
<!--Create stable versions of your code each week by using gitlab tags.\
Take a look at [Gitlab Tags](https://docs.gitlab.com/ee/topics/git/tags.html) for more details. 

Then list here the weekly tags. \
We will evaluate your code every week, based on the corresponding version.-->

Tags:
- Week 1: [Version_Free-flow-input](https://gitlab.inf.ethz.ch/course-fwe2024/students/final-project/fp-p18/-/tree/Version_Free-flow-Input?ref_type=tags)
- Week 2: [Input_tabularData](https://gitlab.inf.ethz.ch/course-fwe2024/students/final-project/fp-p18/-/tree/Input_tabularData?ref_type=tags)
- Week 3: [vol_3](https://gitlab.inf.ethz.ch/course-fwe2024/students/final-project/fp-p18/-/tree/vol_3?ref_type=tags) 


