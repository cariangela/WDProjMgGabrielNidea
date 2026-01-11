# HTML Form Design and Narrative – The Princess Chronicles

## Purpose of the HTML Form
The website will include **interactive HTML forms** to enhance user engagement and provide personalized experiences. These forms serve two main purposes:

### 1. User Sign-Up & Profile Creation
- Collects basic user information: **full name, email address, birthday, and favorite Disney princess**.  
- This information will be **saved on the user’s computer using localStorage**, allowing the website to remember the user’s preferences for personalized content and access to special features such as:
  - Personalized quiz recommendations.  
  - Access to exclusive content.  
  
### 2. Order / Merchandise Form
- Collects information on users ordering Disney merchandise: product choice, quantity, and delivery information.  
- Data is **saved temporarily in localStorage** to calculate total costs and allow the user to review their order before checkout.  

---

## Key Form Features
- Text input fields for **names, email, and addresses**  
- Dropdown menus for **favorite princess or merchandise options**  
- Date input for **birthday**  
- Number input for **quantity of items ordered**  
- Submit buttons that trigger **JavaScript functions to store form data in localStorage**  
- Validation to ensure all required fields are filled before submission  

---

## Webpage 1 – User Sign-Up Form
**Title:** Create Your Princess Profile  
**Purpose:** Collect and save user data locally  

**Layout & Form Elements:**  
- **Header:** “Welcome to The Princess Chronicles – Create Your Profile”  
- **Form Fields:**  
  - Full Name (text input)  
  - Email Address (email input)  
  - Favorite Princess (dropdown: Tiana, Ariel, Rapunzel, Belle, Aurora)  
  - Birthday (date input)  
- **Submit Button:** “Save Profile”  

**Behavior:**  
- JavaScript stores the data in **localStorage** when submitted  
- Redirects the user to the **Personalized Dashboard Page**  

---

## Webpage 2 – Personalized Dashboard
**Title:** Your Princess Journey  
**Purpose:** Retrieve and display user information for a personalized experience  

**Layout & Features:**  
- Greeting: “Welcome, [User Name]!”  
- Favorite Princess Display: Shows image and short description based on user selection. Includes a short description showing how the princess reflects the user’s personality.  
- Quiz Recommendations: Suggests the **“Which Disney Princess Are You?”** quiz  

**Behavior:**  
- JavaScript retrieves profile data from **localStorage** and populates page elements  
- Users can update their profile, which updates localStorage  

---

## Webpage 3 – Merchandise & Order Review
**Title:** Checkout Your Magical Merchandise  
**Purpose:** Use saved order data to calculate total payment and review user orders  

**Layout & Features:**  
- **Order Summary Table:** Lists product name, quantity, price, and total cost (using **objects and arrays**)  
- **Calculate Total Button:** JavaScript computes total from localStorage data  
- **Submit Order Button:** Finalizes order and clears localStorage when the session ends  

---
 ## Wireframes

 <img src="CSQ2Proj_HomePageLogInB.png" alt="Home Page before Logging In"/>
 <img src="CSQ2Proj_LoggingIn.png" alt="Logging Into an Account"/>
 <img src="CSQ2Proj_CreatingAnAccount.png" alt="Creating an Account"/>
 <img src="CSQ2Proj_HomePageLogInA.png" alt="Home Page after Logging In"/>
 <img src="CSQ2Proj_MerchandisePurchasing.png" alt="Merchandise Purchasing"/>
