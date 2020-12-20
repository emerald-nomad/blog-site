import DefaultLayout from "./default-layout"

const NoteLayout: React.FC = () => {
  return <DefaultLayout>
    <article>
       <div>
        {/* <h1>{{ page.title }}</h1>
        <time dateTime="{{ page.last_modified_at | date_to_xmlschema }}">{% if page.type != 'pages' %}
          Last updated on {{ page.last_modified_at | date: "%B %-d, %Y" }}
          {% endif %}
        </time> */}
      </div>
    </article>
  </DefaultLayout>
}