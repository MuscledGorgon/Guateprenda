<?php

class Conexion{
	static public function conectar()
	{
		$link = new PDO("mysql:host=empenofacil.com;dbname=empfacilbd3081677",
						"b62sv2lrpcmz",
						"gO$$#Ttyuii67");
		$link->exec("set names utf8");
		return $link;
	}
}

/*
class Conexion{
	static public function conectar()
	{
		$link = new PDO("mysql:host=localhost;dbname=eliminacontenido",
						"root",
						"aledesma.1");
		$link->exec("set names utf8");
		return $link;
	}
}
 */
class ModeloPaises
{
	
	static public function mdlShowPaises(){
		$stmt = Conexion::conectar()->prepare("SELECT * FROM estados");
		$stmt->execute();
		return $stmt->fetchAll();
		$stmt->close();
		$stmt = null;
	}

	static public function mdlTraerDependencias($clave){
		$stmt = Conexion::conectar()->prepare("SELECT * FROM suc WHERE idclaveedo = $clave GROUP BY municipio");
		$stmt->execute();
		return $stmt->fetchAll();
		$stmt->close();
		$stmt = null;
	}
	
	static public function mdlTraerSucursales($clavedos){
		$stmt = Conexion::conectar()->prepare("SELECT * FROM suc WHERE idmunicipioclave = $clavedos");
		$stmt->execute();
		return $stmt->fetchAll();
		$stmt->close();
		$stmt = null;
	}
	
	
	// DESDE AQUI DOS
	
		static public function mdlShowPaisesDOS(){
		$stmt = Conexion::conectar()->prepare("SELECT * FROM estados");
		$stmt->execute();
		return $stmt->fetchAll();
		$stmt->close();
		$stmt = null;
	}

	static public function mdlTraerDependenciasDOS($clave){
		$stmt = Conexion::conectar()->prepare("SELECT * FROM suc WHERE idclaveedo = $clave GROUP BY municipio");
		$stmt->execute();
		return $stmt->fetchAll();
		$stmt->close();
		$stmt = null;
	}
	
	static public function mdlTraerSucursalesDOS($clavedos){
		$stmt = Conexion::conectar()->prepare("SELECT * FROM suc WHERE idmunicipioclave = $clavedos");
		$stmt->execute();
		return $stmt->fetchAll();
		$stmt->close();
		$stmt = null;
	}
	
}