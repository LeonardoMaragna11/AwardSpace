<?php
include "Conexao.php";
class armacao{
    private int $id;
    private string $nome;
    private string $material;
    private string $marcas;
    private string $cores;
    private string $fotos;

    public function __construct($nome, $material, $marcas, $cores){
        $this->nome = $nome;
        $this->material = $material;
        $this->marcas = $marcas;
        $this->cores = $cores;
        $this->fotos = $fotos;
    }
    
    public function Cadastrar(){
        $conexao = new Conexao();
        $sql = "INSERT INTO
        tb_armacao(nome, material, marcas, cores, fotos)
        VALUES (:nome,:material,:marcas,:cores,:fotos)";
        $pdo = $conexao->Conectar();
        $preview = $pdo->prepare($sql);
        $preview->bindParam(':nome', $this->nome);
        $preview->bindParam(':material', $this->material);
        $preview->bindParam(':marcas', $this->marcas);
        $preview->bindParam(':cores', $this->cores);
        $preview->bindParam(':fotos', $this->fotos);
        $preview->execute();
    }
    
    public static function ListarTodos(){
        $conexao = new Conexao();
        $sql = "SELECT * FROM tb_armacao";
        $dados = $conexao->Consultar($sql);
        return $dados;
    }
}