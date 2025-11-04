export default function Header() {
    return (
        <header style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 2rem",
            background: "#ffffff",
            borderBottom: "1px solid #e5e5e5"
        }}>
            <h1 style={{ fontSize: "1.25rem" }}>Beckerman Tutoring</h1>
            <nav>
                <a href="/" style={{ marginRight: "1rem" }}>Home</a>
                <a href="/about" style={{ marginRight: "1rem" }}>About</a>
                <a href="/subjects" style={{ marginRight: "1rem" }}>Subjects</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    );
}
