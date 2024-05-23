export default function AboutUsRow({ title, text }) {
    return (
        <div className="about-us-row">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}