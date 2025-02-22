import criarAtvidade from "./card-atividade/index.js";
import { linkedList } from "./lista/index.js";
import { toast } from "./toast.js";

const sortable = document.getElementById("list");


new Sortable(sortable, {
  animation: 150,
  ghostClass: "sortable-ghost",
  onEnd: function (event) {
    const valor = linkedList.search(event.oldIndex);
    
    // console.log(event)

    console.log(`Valor: ${valor}, Posição: ${event.oldIndex}`);
    
    linkedList.removeAt(event.oldIndex);
    linkedList.insert(event.newIndex, valor);

    console.log(linkedList.toArray());
    toast("Atividade movida com sucesso", "bg-yellow-500");
    
    criarAtvidade();
  },
});

criarAtvidade();

document.getElementById("addform").addEventListener("submit", (event) => {
  event.preventDefault();

  const task = document.getElementById("task").value;

  linkedList.append(task);
  criarAtvidade();
  toast("Atvidade criada com sucesso!", "bg-green-500");

  console.log(linkedList.toString());
});

document.getElementById("list").addEventListener("click", (event) => {
  const index = parseInt(event.target.getAttribute("data-id"), 10);
  const valor = linkedList.search(index);
  const pos = linkedList.indexOf(valor);

  
  if (event.target.dataset.action === "remover") {
    console.log(`Posição: ${pos}, Valor: ${valor}`);
    linkedList.removeAt(pos);
    criarAtvidade();
    toast("Atividade apagada com sucesso!", "bg-red-500");
  }

  if (event.target.dataset.action === "edit") {
    const editModal = document.getElementById("editModal");
    editModal.classList.remove("hidden");

    document.getElementById("editTask").value = valor;
    
    document.getElementById("editFormModal").addEventListener("submit", (e) => {
      e.preventDefault();
      linkedList.removeAt(pos);
      linkedList.insert(pos, document.getElementById("editTask").value);
      toast("Atividade atualizada com sucesso!", "bg-blue-500");
      
      criarAtvidade();
      editModal.classList.add("hidden");
    });


    document.getElementById("fecharBotao").onclick = () => {
      editModal.classList.add("hidden");
    };
  }
});
