function ItemList() {
const items = ["HTML", "CSS", "JavaScript", "React.js"];
return (
<section className="list">
<h2>Technologies</h2>
<ul>
{items.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
</section>
);
}

export default ItemList;