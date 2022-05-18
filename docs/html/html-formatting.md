# HTML Text Formatting

HTML allows us to format text in the same way we do in MS Word or any other text editing software.

In HTML, there are a lot of elements that help us format our text. Some of these formatting elements include, but are not limited to the following:


| HTML Formatting Element |                       Purpose                                 |
|:-----------------------:|:-------------------------------------------------------------:|
|          `<b>`          | defines **bold** text without any extra importance            |
|       `<strong>`        | defines text with <strong>strong</strong> importance          |
|          `<i>`          | makes the text ***italic***                                   |
|         `<em>`          | defines an <em>emphasized</em> text                           |
|         `<small>`       | defines a smaller text                                        |
|        `<mark>`         | defines a marked or highlighted text                          |
|         `<del>`         | defines a text that has to be <del>strikethrough</del>        |
|         `<ins>`         | defines a text that has been <ins>inserted</ins> in the document |
|         `<sub>`         | defines a  subscript text                           |
|         `<sup>`         | defines a <sup>superscript</sup> text                         |


- To make some text bold, use the `<b>` element.

- Use the `<strong>` element to emphasize a specific piece of text. This implies that the words marked are significant. Browsers usually display text marked with the `<strong>` element as bold.

- Use the `<i>` tag to make italics. Italics are most commonly used for technical terminology, foreign words, specific names, ideas, etc.

- Use the `<em>` element to emphasize specified words. This is used to highlight text that indicates a slight change in the meaning of a statement. Normally, such text is shown in italics in browsers.

Although the `<b>` and `<strong>` elements, as well as the `<i>` and `<em>` elements, appear to be the same when shown by the browser, the basic difference is that the `<b>` and `<i>` elements are merely for display formatting. Meanwhile, the `<strong>` and `<em>` elements give the marked text semantic importance.

- Use the`<small>` element to show text in a small font.
- Use the `<mark>` element to make text look like it's been highlighted with a yellow marker.
- Use the `<del>` element to indicate text that has been deleted or erased. The text will be displayed with a line in the center as if it were crossed out.
- Use the `<ins>` element to indicate that some text has been inserted/added. The text will be underlined as a result of this.
- Use `<sup>` to make the text superscript, and `<sub>` to make the text subscript. These can be used for math, chemical formulas, dates, and footnotes, among other things.

Let's try using all the HTML Formatting Elements discussed in our sample program. 
```
<html>
  <head>
    <title>:et's Learn HTML Text Formatting</title>
  </head>
  <body>
    <p>This is an example of <b>a BOLD text.</b>. See how it differs from other text?</p>
    <p>The following text in enclosed in <strong>strong HTML element.</strong> It is the same with the <b>BOLD</b> element but the browser will read the latter as an important text.</p>
    <p> I would love to spend my summer reading books by <i> Colleen Hoover </i></p>
    <p> Look at that <small>tiny dog</small> in the nearby house. It's so cute! </p>
    <p> I want to <mark>highlight all of my core memories</mark>. They have a special place in my heart! </p>
    <p> That <del>bully</del> is so obnoxious. I want to <del>delete</del> him from my life! </p>
    <p> How often do you see the word <i><ins>Lorem Ipsum</ins></i>? In programming world, it's called a dummy text. </p>
    <p> I love drinking H<sub>2</sub>O before and after I sleep. </p>
    <p> The 12<sup>th</sup> day of June is the independence day of the Philippines. </p>
  </body>
</html>
```



<iframe src="https://replit.com/@PauleenGregana/HTML-Text-Formatting?lite=true"></iframe>
 Hit the `run` button on the upper center of your screen and you should see an output.

To see the sample HTML site, you can visit [here](https://html-text-formatting.pauleengregana.repl.co/).

***Awesome work!***

Now that you have learned more about HTML Text Formatting, let's proceed to the next chapter!

