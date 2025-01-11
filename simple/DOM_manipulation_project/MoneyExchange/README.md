Money Exchange Application

    Overview

            The Money Exchange Application is a web-based tool that allows users to convert currencies using live exchange rates. The application is designed with a user-friendly interface and displays country flags alongside the currency codes for easy identification. Users can input an amount, select source and target currencies, and get the converted value instantly.

    Features

            Live Currency Conversion

            Fetches live exchange rates using a public currency API.

            Provides accurate and real-time conversion values.

            User-Friendly Interface

            Simple and intuitive layout.

            Displays flags of the selected countries.

            Validation

            Ensures positive numerical inputs for conversion.

            Responsive Design

            Optimized for various screen sizes and devices.

    Technologies Used

            HTML5: Structure of the application.

            CSS3: Styling and responsive design.

            JavaScript: Logic for fetching data, processing inputs, and updating the UI.

            Font Awesome: Icons for enhanced visuals.

            Currency API: Fetching live exchange rates from https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api.

    Setup Instructions

            Clone or Download the Repository

            git clone <repository-url>
            cd <repository-folder>

    Folder Structure

            index.html: Main HTML file.

            style.css: Stylesheet for the application.

            script.js: JavaScript file for the application logic.

            countrycode.js: Contains a mapping of currency codes to country codes.

            Launch the Application

            Open index.html in any modern web browser.

    Usage

            Enter an Amount

            Input the amount to be converted in the designated text box.

            Select Currencies

            Choose the source currency from the From dropdown.

            Choose the target currency from the To dropdown.

            Fetch the Conversion

            Click the Get the Exchange button to calculate and display the conversion value.

            View the Result

            The conversion result is displayed below the dropdowns in the message box.

    Application Logic

            Currency Dropdowns

            Populated dynamically using countrycode.js.

            Updates the country flag based on the selected currency.

            API Integration

            Fetches exchange rates for all currencies relative to EUR.

            Performs conversion calculations using the fetched rates.

            Error Handling

            Ensures input values are positive numbers.

            Defaults to 1 if an invalid value is entered.

    Future Enhancements

            Add support for historical exchange rates.

            Enable multi-language support.

            Improve accessibility features.

