# **MODEL DESIGN** by neurons.me

In the context of software design and development, when we discuss how **data is structured**, organized, and interrelated, we are essentially referring to the **"data model"** or simply the "model." In the case of an MVC (Model-View-Controller) architecture, the **"model"** is responsible for representing the data and the rules that govern the data.

*For this model in specific,* we've decided that **topics** have a higher hierarchical priority than **languages**, then this hierarchical relationship would be defined within your model.

**Here's a simplified representation:**

```js
class Topic {
    constructor(name) {
        this.name = name;  // Name of the topic, e.g., "Wildlife"
        this.contents = [];  // List of content related to the topic
    }
}

class Content {
    constructor(title) {
        this.title = title;  // Title of the content, e.g., "Sharks"
        this.languages = [];  // Versions of this content in various languages
    }
}

class LanguageVersion {
    constructor(language, text) {
        this.language = language;  // e.g., "English"
        this.text = text;  // Actual content in this language
    }
}
```

#### In this model:

- `Topic` is the highest class.
- Each `Topic` has multiple pieces of `Content`.
- Each `Content` piece can exist in various `LanguageVersions`.

**The model dictates** the relationships between these entities. While both `Topic` and `LanguageVersion` might stand independent in some respects, in this hierarchy, `Topic` is indeed prioritized over languages.

**This hierarchical relationship in the model helps in designing the system, querying data, organizing the database, and more.** 

**Docs:** [this.me](https://www.neurons.me/this-me)

**Docs:** [neurons.me](https://www.neurons.me/)

<img src="./_._.svg" alt="SVG Image" width="123" height="123" style="width123px; height:123px;">