--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: api; Type: SCHEMA; Schema: -; Owner: treckart
--

CREATE SCHEMA api;


ALTER SCHEMA api OWNER TO treckart;

--
-- Name: fortess_private; Type: SCHEMA; Schema: -; Owner: treckart
--

CREATE SCHEMA fortess_private;


ALTER SCHEMA fortess_private OWNER TO treckart;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = api, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: page; Type: TABLE; Schema: api; Owner: treckart
--

CREATE TABLE page (
    id integer NOT NULL,
    content text,
    title text
);


ALTER TABLE page OWNER TO treckart;

--
-- Name: page_id_seq; Type: SEQUENCE; Schema: api; Owner: treckart
--

CREATE SEQUENCE page_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE page_id_seq OWNER TO treckart;

--
-- Name: page_id_seq; Type: SEQUENCE OWNED BY; Schema: api; Owner: treckart
--

ALTER SEQUENCE page_id_seq OWNED BY page.id;


--
-- Name: post; Type: TABLE; Schema: api; Owner: treckart
--

CREATE TABLE post (
    id integer NOT NULL,
    created timestamp without time zone DEFAULT now(),
    content text NOT NULL,
    title text NOT NULL,
    url text NOT NULL,
    public boolean DEFAULT false
);


ALTER TABLE post OWNER TO treckart;

--
-- Name: TABLE post; Type: COMMENT; Schema: api; Owner: treckart
--

COMMENT ON TABLE post IS 'A blog post';


--
-- Name: COLUMN post.id; Type: COMMENT; Schema: api; Owner: treckart
--

COMMENT ON COLUMN post.id IS 'The primary unique identifier for the post.';


--
-- Name: COLUMN post.created; Type: COMMENT; Schema: api; Owner: treckart
--

COMMENT ON COLUMN post.created IS 'The time the post was created.';


--
-- Name: COLUMN post.content; Type: COMMENT; Schema: api; Owner: treckart
--

COMMENT ON COLUMN post.content IS 'The body of the post.';


--
-- Name: COLUMN post.title; Type: COMMENT; Schema: api; Owner: treckart
--

COMMENT ON COLUMN post.title IS 'The title of the post.';


--
-- Name: COLUMN post.url; Type: COMMENT; Schema: api; Owner: treckart
--

COMMENT ON COLUMN post.url IS 'The URI segment of the post.';


--
-- Name: COLUMN post.public; Type: COMMENT; Schema: api; Owner: treckart
--

COMMENT ON COLUMN post.public IS 'Whether or not the post has been published.';


--
-- Name: post_id_seq; Type: SEQUENCE; Schema: api; Owner: treckart
--

CREATE SEQUENCE post_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE post_id_seq OWNER TO treckart;

--
-- Name: post_id_seq; Type: SEQUENCE OWNED BY; Schema: api; Owner: treckart
--

ALTER SEQUENCE post_id_seq OWNED BY post.id;


--
-- Name: page id; Type: DEFAULT; Schema: api; Owner: treckart
--

ALTER TABLE ONLY page ALTER COLUMN id SET DEFAULT nextval('page_id_seq'::regclass);


--
-- Name: post id; Type: DEFAULT; Schema: api; Owner: treckart
--

ALTER TABLE ONLY post ALTER COLUMN id SET DEFAULT nextval('post_id_seq'::regclass);


--
-- Data for Name: page; Type: TABLE DATA; Schema: api; Owner: treckart
--

COPY page (id, content, title) FROM stdin;
0	Hi! I&rsquo;m Tyler Reckart. I&rsquo;m a [Software Engineer](https://github.com/tylerreckart), occasional [designer](https://dribbble.com/tylerreckart), overly passionate comic book collector, and mechanical watch enthusiast. Most of my work is concerned with front-end architecture, and I primarily program in JavaScript because of that. On the side, I like to tinker with language parsing in Haskell.  \n\nI&rsquo;ve worked with agencies, as a freelancer and with a number of startups. Notably, [Quilt](http://qui.lt), [TipHive](http://tiphive.com/), and most recently [BoomTown](https://boomtownroi.com), where I am building software that helps top real estate brokerages acquire leads and close more deals.  \n\nIf you&rsquo;d like to contact me, I can be reached at tyler(at)tylerreckart.com, and on [Twitter](https://twitter.com/tylerreckart).	About
\.


--
-- Name: page_id_seq; Type: SEQUENCE SET; Schema: api; Owner: treckart
--

SELECT pg_catalog.setval('page_id_seq', 1, false);


--
-- Data for Name: post; Type: TABLE DATA; Schema: api; Owner: treckart
--

COPY post (id, created, content, title, url, public) FROM stdin;
0	2016-09-27 00:00:00	Over the past few weeks, I&rsquo;ve been reading through and studying the problems in [Programming Pearls](https://www.amazon.com/Programming-Pearls-2nd-Jon-Bentley/dp/0201657880/ref=sr_1_1?ie=UTF8&qid=1510196681&sr=8-1&keywords=programming+pearls) in an effort to better understand algorithms and their design. In the book, there&rsquo;s an excellent example of a binary search implementation. Working through the solution really caught my interest and inspired me to work through a front end implementation of a similar algorithm in JavaScript.  \n\nOur binary search algorithm will work by evaluating a value in a set and determining if it is equal to, less than, or greater than the value you are searching for. If the key value is less than the the current index value, the stop index is set to the value of the current index - 1. If the greater than the current index value, the start index is set to the value of the current index + 1. If the key value is equal to the current index value, the search stops.  \n\n**Let&rsquo;s define a problem to build our algorithm around:**  \n\nGiven a sequential array that contains at most 100 integers, find and log all of the integers between 0 and 100 that aren&rsquo;t in the array.  \n\nNow that we have our challenge, wee need outline the basic components of our algorithm. For the purposes of this example, we need an algorithm that takes an array and a key value and returns the index of the key value if it is present in the array. If the key value is not found, the function will return -1.  \n\n```\nfunction binarySearch(arr, key) {\n  if (arr[index] == key) {\n    return index;\n  } else {\n    return -1;\n  }\n}\n```  \n\nThis is the base of our algorithm. However, this code won&rsquo;t work. We need to define our starting and stoping indices as well as the current index value based on the current value of those variables.  \n\n```\nfunction binarySearch(arr, key) {\n  var startIndex = 0;\n  var stopIndex = arr.length - 1;\n  var index = (startIndex + stopIndex) >> 1;\n\n  if (arr[index] == key) {\n    return index;\n  } else {\n    return -1;\n  }\n}\n```  \n\nOur starting index will be set to 0. The stopping index will be dependent on the length of the array that we&rsquo;re evaluating. Our index value will then be calculated by adding our starting and stopping indices together and performing a bitwise operation to find the middle index of our array. We&rsquo;ll use this to perform our calculations.  \n\nNow we need to write a conditional statement that executes the increment/decrement operation on our indices while the key value is not equal to the current index value and the starting index is not equal to the stopping index. At every step of our algorithm&rsquo;s execution, the current index value is evaluated, which determines what our algorithm does next.  \n\n```\n...\nwhile(arr[index] !== key && startIndex < stopIndex) {\n  \n  if (key < arr[index]) {\n    stopIndex = index - 1;\n  } else if (key > arr[index]) {\n    startIndex = index + 1;\n  }\n\n  index = (startIndex + stopIndex) >> 1;\n}\n...\n```  \n\nThe finished algorithm:  \n\n```\nfunction binarySearch(arr, key) {\n  var startIndex = 0;\n  var stopIndex = arr.length - 1;\n  var index = (startIndex + stopIndex) >> 1;\n\n  while(arr[index] !== key && startIndex < stopIndex) {\n  \n    if (key < arr[index]) {\n      stopIndex = index - 1;\n    } else if (key > arr[index]) {\n      startIndex = index + 1;\n    }\n\n    index = (startIndex + stopIndex) >> 1;\n  }\n\n  if (arr[index] == key) {\n    return index;\n  } else {\n    return -1;\n  }\n}\n```  \n\nOur final conditional statement checks to see if the value was found, and if so, returns the index of the key value. If the value is not found, the function return -1.  \n\nNow that we have our algorithm, let&rsquo;s return to our problem statement. We now need to perform a binary search on an array containing 100 random integers. Let&rsquo;s build a function that takes an empty array and populates it with 100 random values and then sorts the result to group together any duplicate values.  \n\n```\nvar myArr = [];\n\nfunction populateArray() {\n  // Generate a random integer between two values\n  function generateRandomInteger(min, max) {\n    return Math.floor(Math.random() * (max - min) + min);\n  }\n\n  // Populate the array\n  for (var i = 0; i <= 100; i++) {\n    myArr.push(generateRandomInteger(0,100));\n  }\n\n  // Sort the array\n  myArr.sort(function(a, b) {\n    return a - b;\n  });\n}\n```  \n\nBy running the populateArray function and logging the result, we&rsquo;ll be left with something like this:  \n\n```\nconsole.log(myArr); // [1, 2, 3, ...];\n```  \n\nSo now that we have our array, let&rsquo;s run our binarySearch function.  \n\n```\nbinarySearch(myArr, 5); // => 3\nbinarySearch(myArr, 10); // => 11\n```\n\nNotice that if our array contains duplicate integers, the index value returned by the binarySearch function will be the index of the last occurrence of that integer. Now we&rsquo;ve got one final step to answering our question. We need to run the binary search over the entire array and log all of the numbers in our range that don&rsquo;t appear in our array. This can be done pretty simply by including the log inside of our return conditional in the binarySearch function and writing a test function that iterates the function 100 times.  \n\n```\n...\nif (arr[index] == key) {\n    return index;\n  } else {\n    console.log(key + &rsquo; not found!&rsquo;);\n    return -1;\n  }\n...\n```  \n\n```\nfunction test() {\n  for (var i = 0; i <= 100; i++) {\n    binarySearch(myArr, i);\n  }\n}\n```  \n\nRunning the test function will give output the following to the console:  \n\n```\n0 not found!\n2 not found!\n6 not found!\n7 not found!\n...\n```  \n\nThat&rsquo;s it! The algorithm and test function satisfy all of the requirements of our prompt.  \n\n**Conclusion** \n\nSearching arrays with a binary search function is an extremely efficient way to do so, because the maximum number of comparisons is limited by the conditions of our algorithm to **O(log(n))**. This is in contrast to a more traditional linear search method of indexOf which is has an efficiency of **O(n)**. After averaging 100 test cases, the average execution time of our binary search function was a mere 0.0501 milliseconds in Chrome.  \n\nIf you&rsquo;d like to see my code, you can view it on [Github](https://gist.github.com/tylerreckart/fa0433056fea20a0d11b4358c17dca8d).	Writing a Binary Search Algorithm in JavaScript	/journal/writing-a-binary-search-algorithm-in-javascript	t
\.


--
-- Name: post_id_seq; Type: SEQUENCE SET; Schema: api; Owner: treckart
--

SELECT pg_catalog.setval('post_id_seq', 1, false);


--
-- Name: page page_pkey; Type: CONSTRAINT; Schema: api; Owner: treckart
--

ALTER TABLE ONLY page
    ADD CONSTRAINT page_pkey PRIMARY KEY (id);


--
-- Name: post post_pkey; Type: CONSTRAINT; Schema: api; Owner: treckart
--

ALTER TABLE ONLY post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

