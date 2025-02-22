package list

type Contato struct {
	Nome  string `json:"nome"`
	Email string `json:"email"`
}

type Node struct {
	Contato Contato
	Proximo *Node
}

type Linked struct {
	Topo   *Node
	Length int
}
