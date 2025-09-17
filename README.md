# USER FLOW PLAN
1. One page
2. Plus button on the left hand side(svg icon?) at the top with an input box to add todo.
3. Check if empty. If not empty, Submit form button becomes clickable. Use 'disabled' attribute and remove when validation is good.
4. Clicking submit rerenders the page and adds a todo at the bottom of the input with an edit SVG icon and a delete svg icon.
5. Use CSS to check for attribute with `[attr]` instead of using TS.

# DATABASE PLAN
1. Table for todo's
   2. Serial ID
   3. TEXT description

# TECHNICAL PLAN
1. app.ts to handle basic routing
2. db.ts to handle Pool connection
3. query.ts to handle queries to the DB
4. a single index.ejs in the views folder. Will need EJS
