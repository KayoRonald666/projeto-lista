package list

import "fmt"

func (l *Linked) Size() int {
	return l.Length
}

func (l *Linked) IsEmpty() bool {
	return l.Length == 0
}

func (l *Linked) Append(contato Contato) {
	node := &Node{Contato: contato}

	if l.IsEmpty() {
		l.Topo = node
	} else {
		atual := l.Topo
		for atual.Proximo != nil {
			atual = atual.Proximo
		}
		atual.Proximo = node
	}
	l.Length++
}

func (l *Linked) Insert(contato Contato, index int) {
	if index < 0 || index > l.Size() {
		panic("Posição inválida")
	}
	node := &Node{Contato: contato}

	if l.IsEmpty() || index == 0 {
		node.Proximo = l.Topo
		l.Topo = node
		l.Length++
		return
	} else {
		atual := l.Topo
		for i := 0; i < index-1; i++ {
			atual = atual.Proximo
		}
		node.Proximo = atual.Proximo

		// Printando o próximo do node
		fmt.Println(node.Proximo)

		// O próximo do atual é o node
		atual.Proximo = node
		l.Length++
	}
}

func (l *Linked) IndexOf(contato Contato) int {
	if l.IsEmpty() {
		return -1
	}
	atual := l.Topo
	index := 0
	for atual != nil {
		if atual.Contato == contato {
			return index
		}
		index++
		atual = atual.Proximo
	}

	return -1
}

func (l *Linked) IndexOfByEmail(email string) int {
	if l.IsEmpty() {
		return -1
	}
	atual := l.Topo
	index := 0
	for atual != nil {
		if atual.Contato.Email == email {
			return index
		}
		index++
		atual = atual.Proximo
	}

	return -1
}

func (l *Linked) Search(pos int) Contato {
	if pos < 0 || pos >= l.Size() {
		panic("Posição inválida")
	}
	atual := l.Topo
	for i := 0; i < pos; i++ {
		atual = atual.Proximo
	}
	return atual.Contato
}

// Display exibe os contatos da lista
func (l *Linked) Display() {
	if l.IsEmpty() {
		println("Lista vazia")
	} else {
		atual := l.Topo
		for atual != nil {
			println(atual.Contato.Nome, atual.Contato.Email)
			atual = atual.Proximo
		}
	}
}

// ToArray converte a lista para um slice de Contato
func (l *Linked) ToArray() []Contato {
	// Criando um slice de Contato com o tamanho da lista
	contatos := make([]Contato, l.Size())
	fmt.Println(contatos)
	atual := l.Topo
	for i := 0; i < l.Size(); i++ {
		contatos[i] = atual.Contato
		atual = atual.Proximo
	}
	return contatos
}

// RemoveAt remove um contato da lista com base na posição
func (l *Linked) RemoveAt(pos int) {
	if pos < 0 || pos >= l.Size() {
		panic("Posição inválida")
	}

	if pos > 0 && pos < l.Size() {
		atual := l.Topo
		for i := 0; i < pos-1; i++ {
			atual = atual.Proximo
		}
		fmt.Println(atual.Contato.Nome)
		fmt.Println(atual.Proximo)
		atual.Proximo = atual.Proximo.Proximo
		l.Length--
	}
}

// Remove remove um contato da lista com base no contato
func (l *Linked) Remove(email string) {
	pos := l.IndexOfByEmail(email)
	if pos != -1 {
		l.RemoveAt(pos)
	}
}

// Clear limpa a lista
func (l *Linked) Clear() {
	l.Topo = nil
	l.Length = 0
}
