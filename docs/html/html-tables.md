# HTML Tables

A table is a visual representation of data with rows and columns. It is more like a spreadsheet. Tables in HTML allow you to organize data such as photos, text, links, and other items into rows and columns of cells.

## HTML Tables Syntax
To create a table in HTML, we must always start with the `<table>` element. Inside the `<table>` tags are the `<tr>` and `<td>` elements. 
A simple HTML table code will look like this:
>```
> <table>
>     <tr>   
>        <td> Jessica </td>
>        <td> Korea </td>
>        <td> Red </td>
>     </tr>  
></table>
>```
For this sample code, our output will look like this:
![basic table](https://i.imgur.com/Fem0ZYY.png)

It does not look like a table yet, but later on, we will add modifications to improve this table further. But first, let us discuss each table's elements.

### `<td>` or Table Data Element
Each table cell or data is defined by the `<td>` element. `<td>` stands for ***table data***. 
>```
> <td> first column </td>
>```
### `<tr>` or Table Row Element
Each table row is enclosed in `<tr>` elements. `<tr>` stands for ***table row***, just like in our example below:
>```
> <table>
>     <tr>   
>        <td> Jessica </td>
>        <td> Korea </td>
>        <td> Red </td>
>     </tr>
>     <tr>   
>        <td> Sandara </td>
>        <td> Philippines </td>
>        <td> Pink </td>
>     </tr>  
></table>
>```
Our output now will look like this:
![table row](https://i.imgur.com/c4dsHCg.png)

In a table, you may have as many rows as you like, as long as the number of cells in each row is the same. 

### `<th>` or Table Headers Element
In a table, it is important to have headers so that the columns will be properly identified. In HTML, we can add table headers using the `<th>` tag (instead of `<td>`) on the first set of the `<tr>` element. `<th>` stands for ***table headers***.

Let us add table headers to our example above:
>```
> <table>
>     <tr>   
>        <th> Name </th>
>        <th> Country </th>
>        <th> Color </th>
>     </tr>
>     <tr>   
>        <td> Jessica </td>
>        <td> Korea </td>
>        <td> Red </td>
>     </tr>
>     <tr>   
>        <td> Sandara </td>
>        <td> Philippines </td>
>        <td> Pink </td>
>     </tr>  
></table>
>```
Now your table has a header:
![table headers](https://i.imgur.com/VXUIzMj.png)

The text in `<th>` elements is bold and centered by default, but you may modify this with CSS.

## HTML Table Borders
When you add a border to a table, you also add borders around each table cell. So initially, our table will look like this: 
![table borders default](https://i.imgur.com/wfZoUko.png)


There are two ways to add a border to our table. The first way is to use the `border` attribute of the `<table>` element. 
>```
> <table border="1">
>     <tr>   
>        <th> Name </th>
>        <th> Country </th>
>        <th> Color </th>
>     </tr>
>     <tr>   
>        <td> Jessica </td>
>        <td> Korea </td>
>        <td> Red </td>
>     </tr>
>     <tr>   
>        <td> Sandara </td>
>        <td> Philippines </td>
>        <td> Pink </td>
>     </tr>  
></table>
>```
Our table will look like this:![table border](https://i.imgur.com/agsIEl0.png)

We can also use the CSS `border` property to add borders to our table, table headers, and table data elements. In our header, let's add this style rule:
>```
> table, th, td {
>  border: 1px solid black;
> }
>```
Applying this style rule and removing the `border` attribute on our table element will generate the almost the same output:
![image](https://i.imgur.com/B4zjvNF.png)

Let us change our border color to red and remove the double borders to improve our table. We can remove double borders by adding the `border-collapse` property and setting it to `collapse` like in our sample code here:
>```
> table, th, td {
>  border: 1px solid red;
>  border-collapse: collapse;
> }
>```
Our table now will look like this:
![table collapse](https://i.imgur.com/A1HxUCS.png)

## HTML Table Width and Height
We can set the table width and height using the `width` and `height` attributes directly to the table elements. You can set it in pixels or percentage relative to the screen area, just like in this example:
>```
> <table width="100%" height="200">
>     <tr>   
>        <th> Name </th>
>        <th> Country </th>
>        <th> Color </th>
>     </tr>
>     <tr>   
>        <td> Jessica </td>
>        <td> Korea </td>
>        <td> Red </td>
>     </tr>
>     <tr>   
>        <td> Sandara </td>
>        <td> Philippines </td>
>        <td> Pink </td>
>     </tr>  
></table>
>```
Our table now will look like this:
![table width and height](https://i.imgur.com/HMXMYov.png)

We could also set the width and height to certain table elements only. For example, let us update our header row's height:
>```
>     <tr height="70">   
>        <th> Name </th>
>        <th> Country </th>
>        <th> Color </th>
>     </tr>
>```
Now our table will have the updated height for the table headers:
![table header](https://i.imgur.com/GPqqTxd.png)

## HTML Table Padding and Spacing
There are two attributes in HTML tables called cell padding and cell spacing, which you will use to manage the white space in your table cells. The **cell spacing** attribute defines space between table cells, while **cell padding** represents the distance between cell borders and the content within a cell.

### Cell padding
To add cell padding on table cells, we can use the CSS `padding` property, just like in our example here:
>```
> table, th, td {
>   padding: 15px;
> }
>```
Our table data will now have this look:
![table padding](https://i.imgur.com/Dc9lthM.png)

 You can also add padding to a particular direction using the `padding-top`, `padding-bottom`, `padding-left`, and `padding-right`.

### Cellspacing
To change the space between table cells, we will use the CSS border-spacing property on the table element:
>```
> table {
>   cell-spacing: 4px;
> }
>```
If we remove our border-collapse property in our CSS, our table will look like this with the cell-spacing property:
![table spacing](https://i.imgur.com/1umP89t.png)

## HTML Table Colspan and Rowspan
If we want to merge two or more columns into a single column, we could use the `colspan` attribute. Similar way, we can use `rowspan` if we want to merge two or more rows. 

Let's look at this sample code:
>```
> <table width="100%" height="150">
>     <tr height="70">   
>        <th colspan="2"> Name and Country </th>
>        <th> Color </th>
>     </tr>
>     <tr>   
>        <td> Jessica </td>
>        <td> Korea </td>
>        <td rowspan="2"> Red </td>
>     </tr>
>     <tr>   
>        <td> Sandara </td>
>        <td> Philippines </td>        
>     </tr>
> </table>
> ```
Now our table with some merged columns and rows will look like this:
![table row and colspan](https://i.imgur.com/Qflf7di.png)

## HTML Table Styling
We can further use CSS to make our tables look more fun and creative. 

To add a background color to our table, we can use the `background-color` property in our CSS. Let us try adding a background color to odd rows (1,3,5..) by using the `:nth-child(odd) selector like this:
>```
>tr:nth-child(odd) {
>   background-color: #FEA2BE;
>}
>```
Our table will now have a background-color styled like this:
![Table Styling](https://i.imgur.com/PgrsNbj.png)

If you want to change the color of even (2,4,6..) rows or columns, you can use the `even` parameter. 

#### Try it yourself 

<iframe src="https://replit.com/@PauleenGregana/HTML-Table-Exercises?lite=true"></iframe>


Having tables on our HTML web page can help improve our data by making it more relatable and understandable to the users. Now that you already know how to add tables to your page feel free to discover more ways to style it. 
#### That's it for HTML tables. See you in our next chapter guide!