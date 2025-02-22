package main

import (
	"strconv"

	"github.com/KayoRonald/eddjs-atividade/handlers"
	"github.com/KayoRonald/eddjs-atividade/list"
	"github.com/KayoRonald/eddjs-atividade/middleware"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	app := fiber.New()

	linked := list.Linked{}

	linked.Append(list.Contato{
		Nome:  "Kayo Ronald",
		Email: "kayoronald@gmail.com",
	})

	linked.Append(list.Contato{
		Nome:  "Ana Maria",
		Email: "ana.mmaria@gmail.com",
	})

	app.Use(logger.New())
	app.Use(middleware.CorsMiddleware())
	app.Use(middleware.Limiter())

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusOK).JSON(linked.ToArray())
	})

	app.Post("/", func(c *fiber.Ctx) error {
		contato := new(list.Contato)

		if err := c.BodyParser(contato); err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": err.Error(),
			})
		}

		email := linked.IndexOfByEmail(contato.Email)

		if email != -1 {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Email já cadastrado",
			})
		}

		linked.Append(*contato)

		return c.Status(fiber.StatusCreated).JSON(fiber.Map{
			"message": "Contato adicionado com sucesso",
		})
	})

	app.Delete("/:email", func(c *fiber.Ctx) error {
		email := c.Params("email")

		pos := linked.IndexOfByEmail(email)

		if pos == -1 {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Email não encontrado",
			})
		}

		linked.RemoveAt(pos)

		return c.Status(fiber.StatusNoContent).JSON(fiber.Map{
			"message": "Contato removido com sucesso",
		})
	})

	app.Post("/insert/:pos", func(c *fiber.Ctx) error {
		pos, err := strconv.Atoi(c.Params("pos"))

		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Posição inválida",
			})
		}

		contato := new(list.Contato)

		if err := c.BodyParser(contato); err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": err.Error(),
			})
		}

		email := linked.IndexOfByEmail(contato.Email)

		if email != -1 {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Email já cadastrado",
			})
		}

		linked.Insert(*contato, pos)

		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"message": "Contato inserido com sucesso",
		})
	})

	app.Get("/size", func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"size": linked.Size(),
		})
	})

	app.Get("/isEmpty", func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"isEmpty": linked.IsEmpty(),
		})
	})

	app.Get("/search/:email", func(c *fiber.Ctx) error {
		email := c.Params("email")

		pos := linked.IndexOfByEmail(email)

		if pos == -1 {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Email não encontrado",
			})
		}

		user := linked.Search(pos)

		return c.Status(fiber.StatusOK).JSON(user)

	})

	app.Use(handlers.NotFound)

	app.Listen(":3000")
}
