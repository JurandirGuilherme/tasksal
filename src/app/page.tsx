"use client";
import axios from "axios";
import { Button, Input, InputRef, Space, Table, TableColumnType } from "antd";
import { useEffect, useRef, useState } from "react";
import Loading from "./components/Loading";
import { useRouter } from "next/navigation";
import "./table.css";
import Box from "./components/Box";
import Title from "./components/Title";
import { SearchOutlined } from "@ant-design/icons";

type Record = {
  id: Number;
  nome: String;
};

type DataAPI = {
  nome: string,
  sigla: string
}

export default function Home() {
  const router = useRouter();

  const [value, setValue] = useState("");
  const [apiData, setApiData] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then(({ data }) => {
        setApiData(data);
        setDataSource(data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "id",
    },
    {
      title: "Sigla",
      dataIndex: "sigla",
      key: "id",
    },
  ];

 

  const handleFilter = (e) =>{
    const textSearch = e.target.value.toLowerCase()
    setValue(e.target.value);
    const filterData = apiData.filter((data: DataAPI) => {
      if (data.sigla.toLowerCase() == textSearch){
        return data.sigla.toLowerCase();
      }
      return data.nome.toLowerCase().includes(textSearch)}
    );
    setDataSource(filterData);

  }
  return (
    <main>
      <Loading>
        <Box>
          <Title>Estados do Brasil</Title>
          <div className="w-full flex flex-row-reverse ">
          <div className="w-56 flex row">
          <Input
            placeholder="Pesquisar por Estado"
            value={value}
            className="w-7"
            style={{height:40}}
            onChange={handleFilter}
          />
          <SearchOutlined style={{color: "GrayText", zIndex: 2, marginLeft:-30}}/>
          </div>
          </div>
          <Table
            columns={columns}
            className="pointerTable"
            pagination={{ position: ["bottomCenter"] }}
            onRow={(record: Record) => {
              return {
                onClick: () => {
                  router.push(`/${record.id}/${record.nome}`);
                },
              };
            }}
            dataSource={dataSource}
          ></Table>
        </Box>
      </Loading>
    </main>
  );
}
