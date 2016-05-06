var lerolero = (function ()
{
    var self;
    var sentences = {};
    var rnd = function () { return Math.floor(Math.random() * 9); };

    return {
        init: function ()
        {
            self = this;

            sentences.a = [
                "Caros colegas, ",
                "Por outro lado, ",
                "Não podemos esquecer que ",
                "Do mesmo modo, ",
                "A prática mostra que ",
                "Nunca é demais insistir que ",
                "A experiência mostra que ",
                "É fundamental ressaltar que ",
                "O incentivo ao avanço tecnológico, assim como ",
                "Assim mesmo, "
            ];
            sentences.b = [
                "a execução deste projeto ",
                "a complexidade dos estudos efetuados ",
                "a atual estrutura social ",
                "o novo modelo didático aqui preconizado ",
                "o desenvolvimento de formas distintas de atuação ",
                "a constante divulgação das informações ",
                "a consolidação das estruturas ",
                "a análise dos diversos resultados ",
                "o início do programa de formação de atitudes ",
                "a expansão de nossa atividade "
            ];
            sentences.c = [
                "nos obriga à análise ",
                "cumpre um papel essencial na formulação ",
                "auxilia a preparação e a estruturação ",
                "contribui para a correta determinação ",
                "assume importantes posições na definição ",
                "facilita a definição ",
                "prejudica a percepção da importância ",
                "oferece uma boa oportunidade de verificação ",
                "acarreta um processo de reformulação ",
                "exige precisão e definição "
            ];
            sentences.d = [
                "das nossas opções de desenvolvimento futuro ",
                "das nossas metas ",
                "das atitudes e das atribuições de nossos alunos ",
                "da nova pedagogia ",
                "das opções básicas para o sucesso do currículo ",
                "do nosso sistema de formação de cidadãos ",
                "das condições apropriadas para o ensino ",
                "dos índices pretendidos ",
                "das formas de ação ",
                "dos conceitos de participação geral "
            ];

        },

        generate: function ()
        {
            var a = sentences.a[rnd()];
            var b = sentences.b[rnd()];
            var c = sentences.c[rnd()];
            var d = sentences.d[rnd()];

            var generated = "\"".concat(a).concat(b).concat(c).concat(d).concat("...\"");
            return generated;
        }
    }
})();

/*$.ajax({
    async: false,
    dataType: "json",
    url: "../js/data.json",
    success: function (data)
    {
        sentences = data;
    },
    error: function(jqXHR, textStatus, errorThrown) {
        alert(errorThrown);
    }
});*/
