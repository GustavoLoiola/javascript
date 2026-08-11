const form = document.getElementById("productForm");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const product = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price: Number(document.getElementById("price").value),
        quantity: Number(document.getElementById("quantity").value)
    };

    try {

        const response = await fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        if (!response.ok) {
            throw new Error("Erro ao cadastrar produto");
        }

        const data = await response.json();

        console.log("Produto cadastrado:", data);

        alert("Produto cadastrado com sucesso!");

        form.reset();

    } catch (error) {
        console.error(error);
        alert("Erro ao cadastrar produto.");
    }
});