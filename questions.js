var obj = {
    "data":[
        {
            "question": "How many sizes of headers are available in HTML by default?",
            "op1":"5",
            "op2":"1",
            "op3":"3",
            "op4":"6",
            "opp_div":""
        },
        {
            "question": "How can we change the background color of an element?",
            "op1":"background-color",
            "op2":"color",
            "op3":"Both a and b",
            "op4":"None",
            "opp_div":""
        },
        {
            "question": "Javascript is what type of a language?",
            "op1":"Object-Based",
            "op2":"Object-Oriented",
            "op3":"Procedural",
            "op4":"None of the above",
            "opp_div":""
        },
        {
            "question": "How to create an ordered list in HTML using <> brackets?",
            "op1":"ul",
            "op2":"li",
            "op3":"ol",
            "op4":"All of the above",
            "opp_div":""
        },
        {
            "question": "Which HTML tag is used to declare internal CSS?",
            "op1":"style",
            "op2":"link",
            "op3":"script",
            "op4":"Both a and c",
            "opp_div":""
        },
        {
            "question": "What keyword is used to check whether a given property is valid or not?",
            "op1":"is in",
            "op2":"in",
            "op3":"exists",
            "op4":"lies",
            "opp_div":""
        },
        {
            "question": "How to display preformatted text in HTML using <> brackets?",
            "op1":"p",
            "op2":"hr",
            "op3":"pre",
            "op4":"None of these",
            "opp_div":""
        },
        {
            "question": "How can we write comments in CSS?",
            "op1":"@",
            "op2":"*",
            "op3":"//",
            "op4":"/* */",
            "opp_div":""
        },
        {
            "question": "When an operators value is NULL, the typeof returned by the unary operator is?",
            "op1":"object",
            "op2":"undefined",
            "op3":"integer",
            "op4":"boolean",
            "opp_div":""
        },
        {
            "question": "Which of the following are valid ways to represent a colour in CSS?",
            "op1":"A valid colour name",
            "op2":"RGB value",
            "op3":"HEX value",
            "op4":"All of the above",
            "opp_div":""
        }
    ]
}

var ans = {
    1:"op4",
    2:"op1",
    3:"op2",
    4:"op3",
    5:"op1",
    6:"op2",
    7:"op3",
    8:"op4",
    9:"op1",
    10:"op4"
}

localStorage.setItem("questions", JSON.stringify(obj));
localStorage.setItem("correct_answers", JSON.stringify(ans));