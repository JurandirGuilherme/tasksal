"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { Input, Table } from "antd";
import Title from "@/app/components/Title";
import { SearchOutlined } from "@ant-design/icons";

type Params = {
  params?: any;
  id: Number;
  nome: String;
};

type DataAPI = {
  nome: string;
  sigla: string;
};

function Page({ params }: Params) {
  const [value, setValue] = useState("");
  const [apiData, setApiData] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "id",
    },
  ];

  useEffect(() => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${params.id}/municipios`
      )
      .then(({ data }) => {
        setApiData(data)
        setDataSource(data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, [params.id]);

  const handleFilter = (e) => {
    const textSearch = e.target.value.toLowerCase();
    setValue(e.target.value);
    const filterData = apiData.filter((data: DataAPI) => {
      return data.nome.toLowerCase().includes(textSearch);
    });
    setDataSource(filterData);
  };
  return (
    <>
      <Loading>
        <div className="flex flex-col text-center gap-4">
          <Title>Cidades em {decodeURI(params.nome)}</Title>
          <div className="w-full flex flex-row-reverse ">
            <div className="w-56 flex row">
              <Input
                placeholder="Pesquisar por Cidade"
                value={value}
                className="w-7"
                style={{ height: 40 }}
                onChange={handleFilter}
              />
              <SearchOutlined
                style={{ color: "GrayText", zIndex: 2, marginLeft: -30 }}
              />
            </div>
          </div>
          <Table
            pagination={{ position: ["bottomCenter"] }}
            columns={columns}
            dataSource={dataSource}
          ></Table>
        </div>
      </Loading>
    </>
  );
}

export default Page;
