import { linkedList } from "../lista/index.js";

export default function criarAtvidade() {
  const array = linkedList.toArray();

  const list = document.getElementById("list");
  list.innerHTML = "";

  array.forEach((element, index) => {
    list.innerHTML += `
    <div data-id="${index}" class="w-full max-w-2xl px-4 md:px-10 py-5 flex mx-auto bg-zinc-600 flex-col gap-5 rounded-md shadow-md">
        <div class="flex flex-row justify-between w-full items-center">
          <div class="flex flex-row items-center gap-2 cursor-pointer">
            <h2 class="text-white font-medium">${element}</h2>
          </div>
           <div class="flex gap-2">
            <i data-action="edit" data-id=${index} class="fa-solid bg-zinc-950 p-2 rounded-md fa-pen text-white cursor-pointer hover:text-gray-300"></i>
            <i data-action="remover" data-id=${index} class="fa-solid bg-zinc-950 p-2 rounded-md fa-trash text-white cursor-pointer hover:text-gray-300"></i>
          </div>
            </div>
      </div>`;
  });
}
