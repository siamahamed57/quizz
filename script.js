const quizData = [
    {
      question: "What is a domain name?",
      options: [
        "A website's physical address",
        "A human-readable website address",
        "A type of hosting service",
        "A programming language",
      ],
      answer: "b",
    },
    {
      question: "Which of the following is an example of a domain name?",
      options: ["192.168.1.1", "example.com", "localhost", "255.255.255.0"],
      answer: "b",
    },
    {
      question: "What is the purpose of a domain registrar?",
      options: [
        "Hosting websites",
        "Storing web files",
        "Managing and selling domain names",
        "Providing internet access",
      ],
      answer: "c",
    },
    {
      question: "What does TLD stand for?",
      options: [
        "Top-Level Domain",
        "Technical-Level Data",
        "Transmission Line Directory",
        "Trusted Link Device",
      ],
      answer: "a",
    },
    {
      question: "Which of the following is NOT a TLD?",
      options: [".com", ".net", ".webpage", ".org"],
      answer: "c",
    },
    {
      question: "What is ICANN?",
      options: [
        "A domain extension",
        "The organization responsible for domain name system",
        "A type of web hosting",
        "A type of IP address",
      ],
      answer: "b",
    },
    {
      question: "What is a subdomain?",
      options: [
        "A domain under another domain",
        "A type of TLD",
        "A dedicated server",
        "A DNS record",
      ],
      answer: "a",
    },
    {
      question: "What is web hosting?",
      options: [
        "A type of IP address",
        "A service that stores website files and makes them accessible",
        "A programming language",
        "A security protocol",
      ],
      answer: "b",
    },
    {
      question: "Which of the following is NOT a type of web hosting?",
      options: ["Shared hosting", "VPS hosting", "Local hosting", "Dedicated hosting"],
      answer: "c",
    },
    {
      question: "What is shared hosting?",
      options: [
        "A hosting where multiple websites share the same server",
        "A private hosting service",
        "A hosting for large businesses only",
        "A hosting for local development",
      ],
      answer: "a",
    },
    {
      question: "Which hosting type provides dedicated resources for a single website?",
      options: ["Shared hosting", "VPS hosting", "Dedicated hosting", "Cloud hosting"],
      answer: "c",
    },
    {
      question: "What does VPS stand for?",
      options: [
        "Virtual Private Server",
        "Virtual Public Storage",
        "Verified Protocol Service",
        "None of the above",
      ],
      answer: "a",
    },
    {
      question: "What is bandwidth in hosting?",
      options: [
        "Amount of data transferred between users and the server",
        "Server’s physical size",
        "Number of websites on the server",
        "The server's processing power",
      ],
      answer: "a",
    },
    {
      question: "What is a server?",
      options: [
        "A storage device",
        "A computer that provides services or resources",
        "A website builder",
        "A programming framework",
      ],
      answer: "b",
    },
    {
      question: "Which type of server is used for hosting websites?",
      options: ["Database server", "Web server", "Mail server", "Proxy server"],
      answer: "b",
    },
    {
      question: "What is the most common web server software?",
      options: ["Apache", "MySQL", "PHP", "CSS"],
      answer: "a",
    },
    {
      question: "What is localhost?",
      options: [
        "A web hosting service",
        "A local server address used for testing",
        "A cloud storage platform",
        "A type of IP address",
      ],
      answer: "b",
    },
    {
      question: "What is DNS responsible for?",
      options: [
        "Hosting websites",
        "Translating domain names into IP addresses",
        "Managing databases",
        "Encrypting data",
      ],
      answer: "b",
    },
    {
      question: "What does IP stand for?",
      options: ["Internet Protocol", "Internal Port", "International Program", "Internet Provider"],
      answer: "a",
    },
    {
      question: "What is an IP address used for?",
      options: [
        "Identifying devices on a network",
        "Hosting websites",
        "Creating domain names",
        "Sending emails",
      ],
      answer: "a",
    },
    {
      question: "How many versions of IP addresses exist?",
      options: ["1", "2", "3", "4"],
      answer: "b",
    },
    {
      question: "What is the length of an IPv4 address?",
      options: ["16-bit", "32-bit", "64-bit", "128-bit"],
      answer: "b",
    },
    {
      question: "What is the length of an IPv6 address?",
      options: ["32-bit", "64-bit", "128-bit", "256-bit"],
      answer: "c",
    },
    {
      question: "Which of the following is a private IP address?",
      options: ["192.168.1.1", "8.8.8.8", "123.45.67.89", "255.255.255.255"],
      answer: "a",
    },
    {
      question: "What does XAMPP stand for?",
      options: [
        "Cross-platform, Apache, MySQL, PHP, Perl",
        "XML, Apache, MySQL, PHP, Python",
        "Xcode, Apache, MongoDB, PHP, Perl",
        "None of the above",
      ],
      answer: "a",
    },
    {
      question: "What is XAMPP used for?",
      options: [
        "Hosting live websites",
        "Developing and testing websites locally",
        "Domain name management",
        "Internet browsing",
      ],
      answer: "b",
    },
    {
      question: "Which component in XAMPP handles databases?",
      options: ["Apache", "MySQL", "PHP", "Perl"],
      answer: "b",
    },
    {
      question: "Which tool in XAMPP is used to manage MySQL databases?",
      options: ["phpMyAdmin", "Apache Server", "WordPress", "File Manager"],
      answer: "a",
    },
    {
      question: "What is WordPress?",
      options: [
        "A programming language",
        "A website builder",
        "A database system",
        "A hosting provider",
      ],
      answer: "b",
    },
    {
      question: "What language is WordPress built with?",
      options: ["JavaScript", "Python", "PHP", "Ruby"],
      answer: "c",
    },
    {
      question: "Where are WordPress themes stored?",
      options: ["wp-content/themes/", "wp-includes/", "wp-admin/", "wp-uploads/"],
      answer: "a",
    },
    {
      question: "What is the default WordPress database prefix?",
      options: ["wp_", "db_", "mysql_", "default_"],
      answer: "a",
    },
    {
      question: "What is a WordPress plugin?",
      options: [
        "A tool to extend WordPress functionalities",
        "A type of hosting",
        "A page builder",
        "A programming script",
      ],
      answer: "a",
    },
  ];
  
  const quizForm = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");
  const submitBtn = document.getElementById("submit-btn");
  
  // Dynamically generate quiz questions
  quizData.forEach((questionData, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
  
    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${questionData.question}`;
    questionDiv.appendChild(questionText);
  
    questionData.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${index}`;
      input.value = String.fromCharCode(97 + optionIndex); // a, b, c, d
      input.required = true; // Make the question required
  
      label.appendChild(input);
      label.appendChild(document.createTextNode(` ${option}`));
      questionDiv.appendChild(label);
    });
  
    quizForm.appendChild(questionDiv);
  });
  
  // Handle form submission
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    // Check if all questions are answered
    const allAnswered = quizData.every((_, index) => {
      return document.querySelector(`input[name="question${index}"]:checked`);
    });
  
    if (!allAnswered) {
      alert("Please answer all questions before submitting.");
      return;
    }
  
    let score = 0;
  
    quizData.forEach((questionData, index) => {
      const selectedOption = document.querySelector(
        `input[name="question${index}"]:checked`
      );
  
      // Display correct answer
      const correctAnswerDiv = document.createElement("div");
      correctAnswerDiv.classList.add("correct-answer");
      correctAnswerDiv.textContent = `Correct Answer: ${questionData.options[
        questionData.answer.charCodeAt(0) - 97
      ]}`;
      quizForm.children[index].appendChild(correctAnswerDiv);
  
      // Calculate score
      if (selectedOption && selectedOption.value === questionData.answer) {
        score++;
      }
    });
  
    // Display result
    resultDiv.textContent = `Your score is ${score}/30. ${
      score >= 20 ? "Congratulations! You passed." : "You are fail."
    }`;
  });