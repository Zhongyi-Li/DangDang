                +-----------------------+
                |  Enable Online Payment |
                +-----------+-----------+
                            |
                            |
                 +----------v---------+
                 |    Form Fields     |
                 +----------+---------+
                            |
                            |
           +----------------v---------------+
           |  Rule 1: Check for Duplicate   |
           |  Customer Type and Payment     |
           |  Method Combination            |
           +----------------+---------------+
                            |
                            |
           +----------------v---------------+
           |  Rule 2: Handle "payment term" |
           |  Method - Clear and Disable    |
           |  Related Fields                |
           +----------------+---------------+
                            |
                            |
           +----------------v---------------+
           |  Rule 3: Handle "online payment"|
           |  and "payment term" Methods -  |
           |  Clear and Disable Related     |
           |  Fields                        |
           +----------------+---------------+
                            |
                            |
           +----------------v---------------+
           |  Rule 4: Handle "bank transfer" |
           |  Method - Set Switch Payment   |
           |  Method and Restrictions       |
           +----------------+---------------+
                            |
                            |
           +----------------v---------------+
           |  Rule 5: Validate and Submit    |
           |  Form - Check Field Conditions |
           +----------------+---------------+
                            |
                            v
           +----------------+---------------+
           |    Submit Form Data             |
           +--------------------------------+