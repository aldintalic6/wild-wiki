getData = (url) => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {

            const tableBody = document.querySelector("#table tbody");

            data.map(row => {
                const tableRow = document.createElement("tr");

                tableRow.innerHTML = `
                    <td><a target="_blank" href="${url + "/" + row.id}">${row.id}</a></td>
                    <td>${row.userId}</td>
                    <td>${row.title}</td>
                `;

                tableBody.append(tableRow);

            })
        })
        .catch(error => {
            alert("PROBLEM HAPPENED ", error);
        })
}       

getData("https://jsonplaceholder.typicode.com/albums");